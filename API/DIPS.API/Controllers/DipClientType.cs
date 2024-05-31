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

    public class DipClientType : ApiController
    {
        [HttpGet]
        public HttpResponseMessage SelectAllClientType([FromUri] int ownerId)
        {
           
            using (var data = new RecordSet(StoredProcedures.DipOwner.usp_dipOwner_SelectById.ToString(), QueryType.StoredProcedure, null, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No record found");
        }

    }
}