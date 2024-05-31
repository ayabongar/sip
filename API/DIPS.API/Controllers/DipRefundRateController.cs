using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Sars.Systems.Data;
using DIPS.Db;
using System.Net;
using System.Net.Http;
using DIPS.Models;

namespace DIPS.Controllers
{
    [Authorize]
    [Obsolete]

    public class DipRefundRateController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage SelectAllRefundRates()
        {

            using (var data = new RecordSet(StoredProcedures.DipRefundRate.usp_dipRefundRate_SelectAll.ToString(), QueryType.StoredProcedure, null, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No Refund Rate found");
        }

        [HttpGet]
        public HttpResponseMessage SelectRefundRateById([FromUri] string invDate, [FromUri] int refundRateId)
        {
            var oParams = new DBParamCollection
            {
                {"@Id", refundRateId},
                {"@invoiceDate", invDate}
            };
            using (var data = new RecordSet(StoredProcedures.DipRefundRate.usp_dipRefundRate_SelectById.ToString(), QueryType.StoredProcedure, oParams, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No Refund Rate found");
        }

        [HttpGet]
        public HttpResponseMessage SelectRefundRateByfuelId([FromUri] int refundRateId)
        {
            var oParams = new DBParamCollection
            {
                {"@Id", refundRateId},
                
            };
            using (var data = new RecordSet(StoredProcedures.DipRefundRate.usp_dipRefundRate_SelectByFuelId.ToString(), QueryType.StoredProcedure, oParams, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No Refund Rate found");
        }
    }
}