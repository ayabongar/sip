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

    public class OwnerController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage SelectOwnerById([FromUri] int ownerId)
        {
            var oParams = new DBParamCollection
            {
                {"@OwnerId", ownerId}
            };
            using (var data = new RecordSet(StoredProcedures.DipOwner.usp_dipOwner_SelectById.ToString(), QueryType.StoredProcedure, oParams, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No record found");
        }

        [HttpGet]
        public HttpResponseMessage SelectOwnerByClientId([FromUri] int clientId)
        {
            var oParams = new DBParamCollection
            {
                {"@clientId", clientId}
            };
            using (var data = new RecordSet(StoredProcedures.DipOwner.usp_dipOwner_SelectByClientId.ToString(), QueryType.StoredProcedure, oParams, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No record found");
        }

        [HttpGet]
        public HttpResponseMessage GetAllOwners()
        {

            using (var data = new RecordSet(StoredProcedures.DipOwner.usp_dipOwner_SelectAll.ToString(), QueryType.StoredProcedure, null, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No record found");

        }

        [HttpGet]
        public HttpResponseMessage SelectOwnersNotLinkedToVehicle()
        {

            using (var data = new RecordSet(StoredProcedures.DipOwner.usp_dipOwner_NotLinkedToVehicles.ToString(), QueryType.StoredProcedure, null, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No record found");

        }
        [HttpPost]
        public HttpResponseMessage InsertOwner([FromBody] Owner body)
        {
            var username = new UserController().GetUserSID();
            var onwersParm = new DBParamCollection
                    {
                       {"@OwnerID",body.OwnerID},
                       {"@OwnerSurname" ,body.OwnerSurname},
                       {"@OwnerInitials" , body.OwnerInitials},
                       {"@OwnerPassportNumber",body.OwnerPassportNumber},
                       {"@OwnerMaritalStatus", body.OwnerMaritalStatus},
                       {"@TitleID", body.TitleID},
                       {"@RankID",  body.RankID},
                       {"@NationalityID", body.NationalityID},
                       {"@UserModified",new UserController().GetUserBySID(username).UserID},
                       {"@Lastmodified",DateTime.Now}
                    };
            using (var oCommand = new DBCommand(StoredProcedures.DipOwner.usp_dipOwner_Insert.ToString(), QueryType.StoredProcedure, onwersParm,
                                                         Db.Conn.Connection))
            {
                oCommand.Execute();
                return Request.CreateResponse(HttpStatusCode.OK, "Owner information saved successfully");

            }
        }

        [HttpPost]
        public HttpResponseMessage UpdateOwner([FromBody] Owner body)
        {
            var username = new UserController().GetUserSID();
            var onwersParm = new DBParamCollection
                    {
                       {"@OwnerID",body.OwnerID},
                       {"@OwnerSurname" ,body.OwnerSurname},
                       {"@OwnerInitials" , body.OwnerInitials},
                       {"@OwnerPassportNumber",body.OwnerPassportNumber},
                       {"@OwnerMaritalStatus", body.OwnerMaritalStatus},
                       {"@TitleID", body.TitleID},
                       {"@RankID",  body.RankID},
                       {"@NationalityID", body.NationalityID},
                       {"@UserModified",new UserController().GetUserBySID(username).UserID},
                       {"@Lastmodified",DateTime.Now}
                    };
            using (var oCommand = new DBCommand(StoredProcedures.DipOwner.usp_dipOwner_Update.ToString(), QueryType.StoredProcedure, onwersParm,
                                                         Db.Conn.Connection))
            {
                oCommand.Execute();
                return Request.CreateResponse(HttpStatusCode.OK, "Owner information saved successfully");

            }
        }

    }
}