using System.Net.Http;
using System.Net;
using System.Web.Http.Cors;
using System.Web.Http;
using Sars.Systems.Data;
using System.Collections.Generic;
using System.Linq;
using DIPS.Db;

using System;
using DIPS.Models;
using System.Text;
using System.IO;
using Newtonsoft.Json;

namespace DIPS.Controllers
{
    [Authorize]
    [Obsolete]

    public class FileUploadController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage GetDocumentByClient([FromUri] int clientId,int vehicleId,int OwnerId,int claimId)
        {
            var oParams = new DBParamCollection
                              {
                                  {"@ClientID", clientId},
                                   {"@VehicleID", vehicleId},
                                    {"@OwnerID", OwnerId},
                                     {"@ClaimId", claimId}
                              };

            using (var data = new RecordSet(StoredProcedures.dipFiles.dipFileUpload_Select.ToString(), QueryType.StoredProcedure, oParams, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No record found");
        }

        [HttpGet]
        public HttpResponseMessage  GetFiles(string objectId)
        {

            var url = System.Configuration.ConfigurationManager.AppSettings["document-service-url-get"];
            var myReq = WebRequest.Create(string.Format(url, objectId)) as HttpWebRequest;
            myReq.Method = "GET";
            var httpResponse = (HttpWebResponse)myReq.GetResponse();
            using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
            {
                var result = streamReader.ReadToEnd();
                var x = JsonConvert.DeserializeObject<UploadedFiles>(result.Replace("[", "").Replace("]", ""));
                var base64 = x.content;
                //var buffer = Convert.FromBase64String(base64);
                return Request.CreateResponse(HttpStatusCode.OK, base64);              
            }
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]  UploadedFiles theFile )
        {
            var username = new UserController().GetUserSID();          
            var doc = theFile.FileAsByteArray;
            StringBuilder sb = new StringBuilder();

            // Remove file type from base64 encoding, if any
            if (theFile.FileAsBase64.Contains(","))
            {
                theFile.FileAsBase64 = theFile.FileAsBase64
                  .Substring(theFile.FileAsBase64.IndexOf(",") + 1);
            }

            sb.Append(" { ");
            sb.AppendFormat(" 'objectType':'{0}',", "sars_cms_doc");
            sb.AppendFormat(" 'objectName':'{0}',", Path.GetFileName(theFile.FileName));
            sb.AppendFormat(" 'contentType':'{0}',", Path.GetExtension(theFile.FileName).Replace(".", "").ToLower());
            sb.AppendFormat(" 'r_composite_id':'{0}',", theFile.ClientID);
            sb.AppendFormat(" 'author':'{0}',", username);
            sb.Append("'properties':");
            sb.Append("  ["); 

            sb.Append(" {'sars_cms_source':'CASE MANAGEMENT SYSTEMS'}, ");
            sb.Append(" { 'sars_cms_case':'" + theFile.ClientID + "'},");
            sb.Append(" { 'sars_classification_type':'" + 1 + "'},");
            sb.Append(" { 'sars_class_sub_type':''}");


            sb.Append("  ],");
            //sb.AppendFormat("'content':'{0}'", Convert.ToBase64String(doc));
            sb.AppendFormat("'content':'{0}'", theFile.FileAsBase64);
            sb.Append(" }");

            var url = System.Configuration.ConfigurationManager.AppSettings["document-service-url-post"];
            var data = sb.ToString();
            var myReq = WebRequest.Create(url) as HttpWebRequest;
            myReq.ContentType = "application/json; charset=utf-8";
            myReq.Method = "POST";
            myReq.Accept = "application/json; charset=utf-8";

            var arr = Encoding.ASCII.GetBytes(data);
            using (var streamWriter = myReq.GetRequestStream())
            {
                streamWriter.Write(arr, 0, arr.Length);
                streamWriter.Flush();
                streamWriter.Close();
            }

            var httpResponse = (HttpWebResponse)myReq.GetResponse();
            using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
            {
                var result = streamReader.ReadToEnd();
                if (!string.IsNullOrEmpty(result))
                {
                    var x = JsonConvert.DeserializeObject<UploadedFiles>(result.Replace("[", "").Replace("]", ""));
                    if (x.Message.Equals("SAVED", StringComparison.CurrentCultureIgnoreCase))
                    {
                        var fileContent = new UploadedFiles()
                        {
                            ClientID = theFile.ClientID,
                            FileName = theFile.FileName,
                            ObjectId = x.ObjectId,
                            FilePath = x.FilePath,
                            FileSize = x.FileSize,
                            Message = x.Message,
                            Owner = x.Owner,
                            CreationDate = x.CreationDate,
                            UploadedBy = username,
                            Timestamp = DateTime.Now
                        };

                       
                        var clientParm = new DBParamCollection
                           {
                                  {"@ClientID",theFile.ClientID},
                                  {"@VehicleID",theFile.VehicleId},
                                  {"@OwnerID",theFile.OwnerId},
                                 // {"@InvoiceId", theFile.InvoiceId},
                                  {"@ClaimId", theFile.ClaimId},
                                  {"@FileName",theFile.FileName},
                                  {"@ObjectId",fileContent.ObjectId},
                                  {"@FilePath",fileContent.FilePath},
                                  {"@FileType",theFile.FileType},
                                  {"@FileSize",fileContent.FileSize},
                                  {"@Message",fileContent.Message},
                                  {"@comment",theFile.Comment},  
                                  {"@UploadedBy",new UserController().GetUserBySID(username).UserID},
                                  
                             };
                        using (
                                       var oCommand = new DBCommand(StoredProcedures.dipFiles.dipFileUpload_Insert.ToString(), QueryType.StoredProcedure, clientParm,
                                                                     Db.Conn.Connection))
                        {
                            oCommand.Execute();
                            return Request.CreateResponse(HttpStatusCode.OK, "Record executed successfully");

                        }

                    }
                }
            }
            return Request.CreateResponse(HttpStatusCode.InternalServerError, "Record is not saved successfully");
        }
    }
}