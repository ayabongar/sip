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
    public class VehiclesController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage GetClientVehicles()
        {

            using (var data = new RecordSet(StoredProcedures.DIPVehicle.usp_dipVehicle_SearchByClient.ToString(), QueryType.StoredProcedure, null, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No embassy found");
        }

        [HttpGet]
        public HttpResponseMessage GetAllClientVehicles()
        {

            using (var data = new RecordSet(StoredProcedures.DIPVehicle.usp_dipVehicle_ALLByClient.ToString(), QueryType.StoredProcedure, null, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No embassy found");
        }

        [HttpGet]
        public HttpResponseMessage GetVehicleById([FromUri] int id)
        {
            var oParams = new DBParamCollection
                              {
                                  {"@Id", id}
                              };

            using (var data = new RecordSet(StoredProcedures.DIPVehicle.usp_dipVehicle_VehicleById.ToString(), QueryType.StoredProcedure, oParams, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0].ToList<Vehicles>()[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No vehicles found");
        }

        [HttpGet]
        public HttpResponseMessage GetVehicleByClientId([FromUri] int clientId)
        {
            var oParams = new DBParamCollection
                              {
                                  {"@clientId", clientId}
                              };
            using (var data = new RecordSet(StoredProcedures.DIPVehicle.usp_dipVehicle_SearchByClientId.ToString(), QueryType.StoredProcedure, oParams, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No vehicles found");
        }

        [HttpGet]
        public HttpResponseMessage SelectVehicleByOwnerId([FromUri] int ownerId)
        {
            var oParams = new DBParamCollection
                              {
                                  {"@ownerId", ownerId}
                              };
            using (var data = new RecordSet(StoredProcedures.DIPVehicle.usp_dipVehicle_SearchByOwnerId.ToString(), QueryType.StoredProcedure, oParams, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No vehicles found");


        }

        [HttpPost]
        public HttpResponseMessage InsertIntoVehicle([FromBody] Vehicles body)
        {
            var username = new UserController().GetUserSID();
            var param = new DBParamCollection
                        {
                            
                            {"@ClientID", body.ClientID},
                            {"@VehicleRegistration", body.VehicleRegistration},
                            {"@VehicleRefNumber", body.VehicleRefNumber},
                            {"@VehicleRefDate", body.VehicleRefDate},
                            {"@VehicleMake", body.VehicleMake},
                            {"@VehicleModel", body.VehicleModel},
                            {"@VehicleTankCapacity", body.VehicleTankCapacity},
                            {"@VehicleEffectiveDate", body.VehicleEffectiveDate},
                            {"@VehiclePurchaseDate", body.VehiclePurchaseDate},
                            {"@VehicleCancellationDate", body.VehicleCancellationDate},
                            {"@TemporaryRegistration", body.TemporaryRegistration},
                            {"@VehiclesVIN", body.VehiclesVIN},
                            {"@FuelTypeID", body.FuelTypeID},
                            {"@VehicleType", body.VehicleType},
                            {"@OwnerType", body.OwnerType},
                            //{"@OwnerID", body.OwnerID.Equals("0")||  string.IsNullOrEmpty(body.OwnerID.ToString() )? DBNull.Value : (object)body.OwnerID},
                            {"@UserModified", new UserController().GetUserBySID(username).UserID},
                            {"@Lastmodified", DateTime.Now},
                            {"@RegistrationReason", body.RegistrationReason},
                             {"@OwnerID",body.OwnerID},
                            {"@OwnerSurname" ,body.OwnerSurname},
                            {"@OwnerInitials" , body.OwnerInitials},
                            {"@OwnerPassportNumber",body.OwnerPassportNumber},
                            {"@OwnerMaritalStatus", body.OwnerMaritalStatus},
                            {"@TitleID", body.TitleID},
                            {"@RankID",  body.RankID},
                            {"@NationalityID", body.NationalityID},
                        };
            //using (var oCommand = new DBCommand(StoredProcedures.DIPVehicle.usp_dipVehicle_Insert.ToString(), QueryType.StoredProcedure, param,
            //                                             Db.Conn.Connection))
            //{
            //    oCommand.Execute();
            //    return Request.CreateResponse(HttpStatusCode.OK, "vehicle information saved successfully");

            //}
            using (var data = new RecordSet(StoredProcedures.DIPVehicle.usp_dipVehicle_Insert.ToString(), QueryType.StoredProcedure, param, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0].ToList<Vehicles>()[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.OK, "Record not saved.");
        }

        [HttpPost]
        public HttpResponseMessage UpdateVehicle([FromBody] Vehicles body)
        {
         
            var username = new UserController().GetUserSID();
            var param = new DBParamCollection
                        {
                            {"@VehicleID", body.VehicleID},
                            {"@ClientID", body.ClientID},
                            {"@VehicleRegistration", body.VehicleRegistration},
                            {"@VehicleRefNumber", body.VehicleRefNumber},
                            {"@VehicleRefDate", SafeParameters.StringToDateTimeSafeParameter(body.VehicleRefDate.ToString())},
                            {"@VehicleMake", body.VehicleMake},
                            {"@VehicleModel", body.VehicleModel},
                            {"@VehicleTankCapacity", body.VehicleTankCapacity},
                            {"@VehicleEffectiveDate", SafeParameters.StringToDateTimeSafeParameter(body.VehicleEffectiveDate.ToString())},
                            {"@VehiclePurchaseDate",  SafeParameters.StringToDateTimeSafeParameter(body.VehiclePurchaseDate.ToString())},
                            {"@VehicleCancellationDate",  SafeParameters.StringToDateTimeSafeParameter(body.VehicleCancellationDate.ToString())},
                            {"@TemporaryRegistration", body.TemporaryRegistration},
                            {"@VehiclesVIN", body.VehiclesVIN},
                            {"@FuelTypeID", body.FuelTypeID},
                            {"@VehicleType", body.VehicleType},
                            {"@OwnerType", body.OwnerType},
                           // {"@OwnerID", body.OwnerID.Equals("0")||  string.IsNullOrEmpty(body.OwnerID.ToString() )? DBNull.Value : (object)body.OwnerID},
                            {"@UserModified", new UserController().GetUserBySID(username).UserID},
                            {"@Lastmodified", DateTime.Now},
                            {"@RegistrationReason", body.RegistrationReason},
                            {"@OwnerID",body.OwnerID},
                            {"@OwnerSurname" ,body.OwnerSurname},
                            {"@OwnerInitials" , body.OwnerInitials},
                            {"@OwnerPassportNumber",body.OwnerPassportNumber},
                            {"@OwnerMaritalStatus", body.OwnerMaritalStatus},
                            {"@TitleID", body.TitleID},
                            {"@RankID",  body.RankID},
                            {"@NationalityID", body.NationalityID},
                        };
           
        
            // using (var oCommand = new DBCommand(StoredProcedures.DIPVehicle.usp_dipVehicle_Update.ToString(), QueryType.StoredProcedure, param,
            //                                             Db.Conn.Connection))
            //{
            //    oCommand.Execute();          

            //}

            using (var data = new RecordSet(StoredProcedures.DIPVehicle.usp_dipVehicle_Update.ToString(), QueryType.StoredProcedure, param, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0].ToList<Vehicles>()[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.OK, "Record not saved.");

        }

        [HttpGet]
        [Route("CheckDuplicateVehicle")]
        public HttpResponseMessage CheckDuplicateVehicle([FromUri] string registration, [FromUri] int id)
        {
            var oParams = new DBParamCollection
            {
                {"@VehicleRegistration", registration},
                {"@VehicleID", id}
            };

            using (var data = new RecordSet(StoredProcedures.DIPVehicle.usp_dipCheckDuplicateVehicle.ToString(), QueryType.StoredProcedure, oParams, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    var isDuplicate = (bool)data.Tables[0].Rows[0]["IsDuplicate"];
                    return Request.CreateResponse(HttpStatusCode.OK, new { duplicate = isDuplicate });
                }
            }
            return Request.CreateResponse(HttpStatusCode.OK, new { duplicate = false });
        }

    }
}