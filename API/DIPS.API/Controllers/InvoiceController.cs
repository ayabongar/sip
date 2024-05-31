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

    public class InvoiceController : ApiController
    {
        [HttpGet]
             
        public HttpResponseMessage SelectInvoiceInfoById([FromUri] int InvoiceId)
        {
            var oParams = new DBParamCollection
                              {
                                  {"@InvoiceId", InvoiceId}
                              };
            using (var data = new RecordSet(StoredProcedures.DipInvoice.usp_dipInvoice_Read.ToString(), QueryType.StoredProcedure, oParams, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No content");
        }

        [HttpGet]

        public HttpResponseMessage SelectInvoiceByClaimId([FromUri] int claimId)
        {
            var oParams = new DBParamCollection
                              {
                                  {"@ClaimID", claimId}
                              };
            using (var data = new RecordSet(StoredProcedures.DipInvoice.usp_dipInvoice_ReadByClaimId.ToString(), QueryType.StoredProcedure, oParams, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No content");
        }

        [HttpPost]

        public HttpResponseMessage ValidateInvoice([FromBody] Claim claim)
        {
            var oParams = new DBParamCollection
                              {
                                  {"@InvoiceDate", claim.InvoiceDate},
                                  {"@InvoiceNumber", claim.InvoiceNumber},
                                  {"@InvoiceSuppliersName",claim. InvoiceSuppliersName},
                                   {"@ClaimVehicleID", claim.ClaimVehicleID},
                                    {"@ClaimClientCessionaryLinkID", claim.ClaimClientCessionaryLinkID}
                              };
            using (var data = new RecordSet(StoredProcedures.DipInvoice.usp_dipInvoice_Validate.ToString(), QueryType.StoredProcedure, oParams, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No content");
        }

        [HttpPost]

        public HttpResponseMessage DeleteInvoice([FromUri] int invoiceId)
        {
            var username = new UserController().GetUserSID();
            var invoiceParam = new DBParamCollection
                                                   {
                                                       {"@InvoiceID", invoiceId},
                                                       {"@UserModified", new UserController().GetUserBySID(username).UserID}
                                                   };
           

            using (var oCommand = new DBCommand(StoredProcedures.DipInvoice.usp_dipInvoice_Delete.ToString(), QueryType.StoredProcedure, invoiceParam,
                                                      Db.Conn.Connection))
            {
                oCommand.Execute();

            }
            return Request.CreateResponse(HttpStatusCode.OK, "Updated");
        }
    }
}