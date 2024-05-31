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

namespace DIPS.Controllers
{
    [Authorize]
    [Obsolete]
    public class ClientController : ApiController
    {
        [HttpGet]
        //[Route("api/Client/GetAllClient")]        
        public HttpResponseMessage GetAllClient()
        {
            using (var data = new RecordSet(StoredProcedures.dipClient.usp_dipClient_selectAll.ToString(), QueryType.StoredProcedure, null, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No content");

        }

        [HttpGet]
        public HttpResponseMessage GetClientById([FromUri]int id)
        {
            var oParams = new DBParamCollection
                              {
                                  {"@ClientID", id}
                              };

            using (var data = new RecordSet(StoredProcedures.dipClient.usp_dipClient_SelectById.ToString(), QueryType.StoredProcedure, oParams, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK,  data.Tables[0].ToList<Client>()[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No record found");
        }

        [HttpPost]
        public HttpResponseMessage SaveOrUpdateClient([FromBody] Client body)
        {
            var username = new UserController().GetUserSID();
            var clientParm = new DBParamCollection
                           {
                                  {"@ClientID",body.ClientID},
                                  {"@ClientTypeID",body.ClientTypeID},
                                  {"@ClientName",body.ClientName.Trim()},
                                  {"@ClientRefNumber",body.ClientRefNumber.Trim()},
                                  {"@ClientRefDate",body.ClientRefDate},
                                  {"@ClientEffectiveDate",body.ClientEffectiveDate},
                                  {"@ClientCancellationDate",body.ClientCancellationDate},
                                  {"@ClientAddress1",body.ClientAddress1.Trim()},
                                  {"@ClientAddress2",body.ClientAddress2.Trim()},
                                  {"@ClientAddress3",body.ClientAddress3.Trim()},
                                  {"@ClientAddress4",body.ClientAddress4.Trim()},
                                  {"@ClientAddressPostCode",body.ClientAddressPostCode.Trim()},
                                  {"@ClientPostal1",body.ClientPostal1.Trim()},
                                  {"@ClientPostal2",body.ClientPostal2.Trim()},
                                  {"@ClientPostal3",body.ClientPostal3.Trim()},
                                  {"@ClientPostalPostCode",body.ClientPostalPostCode.Trim()},
                                  {"@ClientContactTitleID",body.ClientContactTitleID},
                                  {"@ClientContactInitials",body.ClientContactInitials.Trim()},
                                  {"@ClientContactSurname",body.ClientContactSurname.Trim()},
                                  {"@ClientContactCell",body.ClientContactCell.Trim()},
                                  {"@ClientContactPhone",body.ClientContactPhone.Trim()},
                                  {"@ClientContactPhoneCode",body.ClientContactPhoneCode.Trim()},
                                  {"@ClientContactFax",body.ClientContactFax.Trim()},
                                  {"@ClientContactEMail",body.ClientContactEMail.Trim()},
                                  {"@ClientNationalityID",body.ClientNationalityID},
                                  {"@ClientBankAccount",body.ClientBankAccount.Trim()},
                                  {"@ClientBankAccountType",body.ClientBankAccountType.Trim()},
                                  {"@ClientBankName",body.ClientBankName.Trim()},
                                  {"@ClientBankBranchCode",body.ClientBankBranchCode.Trim()},
                                  {"@MiscellaneousAccount",body.MiscellaneousAccount.Trim()},
                                  {"@ClientAllias",body.ClientAllias.Trim()},
                                  {"@UserModified",new UserController().GetUserBySID(username).UserID},
                                  {"@Lastmodified",DateTime.Now},
                             };
            using (
                           var oCommand = new DBCommand(StoredProcedures.dipClient.usp_dipClient_Update.ToString(), QueryType.StoredProcedure, clientParm,
                                                         Db.Conn.Connection))
            {
                oCommand.Execute();
                return Request.CreateResponse(HttpStatusCode.OK, "Record executed successfully");

            }
        }

    }
}