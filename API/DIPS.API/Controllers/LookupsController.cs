
using System.Net.Http;
using System.Net;
using System.Web.Http.Cors;
using System.Web.Http;

using Sars.Systems.Data;
using System.Collections.Generic;
using System.Linq;
using System;
using DIPS.Db;
using DIPS.Models;

namespace DIPS.Controllers
{
    [Obsolete]

    public class LookupsController :  ApiController
    {
        #region Clients

       
        [HttpGet]

        public HttpResponseMessage GetAllClientType()
        {

            using (var data = new RecordSet(StoredProcedures.dipLookupClientType.usp_dipLookupClientType_SelectAllTypes.ToString(), QueryType.StoredProcedure, null, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No record found");
        }
        [HttpGet]
      
        public HttpResponseMessage GetClientType()
        {          

            using (var data = new RecordSet(StoredProcedures.dipLookupClientType.usp_dipLookupClientType_SelectAll.ToString(), QueryType.StoredProcedure, null, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No record found");
        }

        [HttpGet]
        public HttpResponseMessage GetClientTypeByID([FromUri] int id)
        {
            var oParams = new DBParamCollection
                              {
                                  {"@ClientTypeID", id}
                              };

            using (var data = new RecordSet(StoredProcedures.dipLookupClientType.usp_diplookupClientType_SelectById.ToString(), QueryType.StoredProcedure, oParams, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0].ToList<Lookups>()[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No record found");
        }

        [HttpPost]
        public HttpResponseMessage UpdateClientType([FromBody] Lookups body)
        {
            var username = new UserController().GetUserSID();
            
            var parm = new DBParamCollection
                {
                 {"@ClientTypeID", body.ClientTypeID},
                    {"@ClientTypeDescription", body.ClientTypeDescription},
                    {"@UserModified", new UserController().GetUserBySID(username).UserID},
                    {"@Lastmodified", DateTime.Now},
                    {"@Active",body.Active},
                 };
            if (body.ClientTypeID > 0)
            {
                using (var oCommand = new DBCommand(StoredProcedures.dipLookupClientType.usp_diplookupClientType_Update.ToString(), QueryType.StoredProcedure, parm,
                                                         Db.Conn.Connection))
                {
                    oCommand.Execute();
                    return Request.CreateResponse(HttpStatusCode.OK, "The record is saved successfully");

                }
            }
            else
            {
                using (var oCommand = new DBCommand(StoredProcedures.dipLookupClientType.usp_dipClientTypeLookup_Insert.ToString(), QueryType.StoredProcedure, parm,
                                                        Db.Conn.Connection))
                {
                    oCommand.Execute();
                    return Request.CreateResponse(HttpStatusCode.OK, "The record is saved successfully");

                }
            }
        }
        [HttpGet]
        public HttpResponseMessage GetClientTitleType()
        {

            using (var data = new RecordSet(StoredProcedures.DipLookupTitle.usp_dipLookupTitle_SelectAll.ToString(), QueryType.StoredProcedure, null, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No record found");
        }

        [HttpGet]
        public HttpResponseMessage GetClientNatinality()
        {

            using (var data = new RecordSet(StoredProcedures.dipLookupNationality.usp_dipLookupNationality_SelectAllTypes.ToString(), QueryType.StoredProcedure, null, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No record found");
        }

        [HttpGet]
        public HttpResponseMessage GetClientTitle()
        {

            using (var data = new RecordSet(StoredProcedures.DipLookupTitle.usp_dipLookupTitle_SelectAll.ToString(), QueryType.StoredProcedure, null, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No record found");
        }
        #endregion

        #region Ranks

       
        [HttpGet]
        public HttpResponseMessage GetRank()
        {

            using (var data = new RecordSet(StoredProcedures.DipLookupRank.usp_dipLookupRank_SelectByAll.ToString(), QueryType.StoredProcedure, null, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No record found");
        }

        [HttpGet]

        public HttpResponseMessage SelectAllOwnersRank()
        {

            using (var data = new RecordSet(StoredProcedures.DipOwner.usp_dipLookupRank_SelectByAllOwner.ToString(), QueryType.StoredProcedure, null, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No record found");
        }

        [HttpGet]
        public HttpResponseMessage GetRankByID([FromUri] int id)
        {
            var oParams = new DBParamCollection
                              {
                                  {"@RankID", id}
                              };

            using (var data = new RecordSet(StoredProcedures.DipLookupRank.usp_dipLookupRank_SelectById .ToString(), QueryType.StoredProcedure, oParams, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No record found");
        }

        [HttpPost]
        public HttpResponseMessage InsertOrUpdateRank([FromBody] Ranks body)
        {
            var username = new UserController().GetUserSID();

            var parm = new DBParamCollection
                {
                    {"@RankID", body.RankID},
                    {"@RankDescription", body.RankDescription},
                    {"@UserModified", new UserController().GetUserBySID(username).UserID},
                    {"@Lastmodified", DateTime.Now},
                    {"@Active",body.Active},
                 };
            if (body.RankID > 0)
            {
                using (var oCommand = new DBCommand(StoredProcedures.DipLookupRank.usp_dipLookupRank_Update.ToString(), QueryType.StoredProcedure, parm,
                                                         Db.Conn.Connection))
                {
                    oCommand.Execute();
                    return Request.CreateResponse(HttpStatusCode.OK, "The record is saved successfully");

                }
            }
            else
            {
                using (var oCommand = new DBCommand(StoredProcedures.DipLookupRank.usp_dipLookupRank_Insert.ToString(), QueryType.StoredProcedure, parm,
                                                        Db.Conn.Connection))
                {
                    oCommand.Execute();
                    return Request.CreateResponse(HttpStatusCode.OK, "The record is saved successfully");

                }
            }
        }

        #endregion

        #region Title
        [HttpGet]
        public HttpResponseMessage SelectAllTitles()
        {

            using (var data = new RecordSet(StoredProcedures.DipLookupTitle.usp_dipLookupTitle_SelectAllTypes.ToString(), QueryType.StoredProcedure, null, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No record found");
        }

        [HttpGet]
        public HttpResponseMessage SelectTitleByID([FromUri] int id)
        {
            var oParams = new DBParamCollection
                              {
                                  {"@TitleID", id}
                              };

            using (var data = new RecordSet(StoredProcedures.DipLookupTitle.usp_dipLookupTitle_SelectById.ToString(), QueryType.StoredProcedure, oParams, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No record found");
        }

        [HttpPost]
        public HttpResponseMessage InsertOrUpdateTitle([FromBody] Title body)
        {
            var username = new UserController().GetUserSID();

            var parm = new DBParamCollection
                {
                    {"@TitleID", body.TitleID},
                    {"@TitleDescription", body.TitleDescription},
                    {"@UserModified", new UserController().GetUserBySID(username).UserID},
                    {"@Lastmodified", DateTime.Now},
                    {"@Active",body.Active},
                 };
            if (body.TitleID > 0)
            {
                using (var oCommand = new DBCommand(StoredProcedures.DipLookupTitle.usp_dipLookupTitle_Update.ToString(), QueryType.StoredProcedure, parm,
                                                         Db.Conn.Connection))
                {
                    oCommand.Execute();
                    return Request.CreateResponse(HttpStatusCode.OK, "The record is saved successfully");

                }
            }
            else
            {
                using (var oCommand = new DBCommand(StoredProcedures.DipLookupTitle.usp_dipLookupTitle_Insert.ToString(), QueryType.StoredProcedure, parm,
                                                        Db.Conn.Connection))
                {
                    oCommand.Execute();
                    return Request.CreateResponse(HttpStatusCode.OK, "The record is saved successfully");

                }
            }
        }
        #endregion

        #region Nationality
        [HttpGet]
        public HttpResponseMessage SelectNationalityAllTypes()
        {

            using (var data = new RecordSet(StoredProcedures.dipLookupNationality.usp_dipNationailityLookupType_SelectAll.ToString(), QueryType.StoredProcedure, null, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No record found");
        }

        [HttpGet]
        public HttpResponseMessage SelectNationalityInfoById([FromUri] int id)
        {
            var oParams = new DBParamCollection
                              {
                                  {"@NationalityID", id}
                              };

            using (var data = new RecordSet(StoredProcedures.dipLookupNationality.usp_dipNationalityLookup_SelectById.ToString(), QueryType.StoredProcedure, oParams, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No record found");
        }

        [HttpPost]
        public HttpResponseMessage InsertOrUpdateNationality([FromBody] Nationality body)
        {
            var username = new UserController().GetUserSID();

            var parm = new DBParamCollection
                {
                    {"@NationalityID", body.NationalityID},
                    {"@NationalityDescription", body.NationalityDescription},
                    {"@UserModified", new UserController().GetUserBySID(username).UserID},
                    {"@Lastmodified", DateTime.Now},
                    {"@Active",body.Active},
                 };
            if (body.NationalityID > 0)
            {
                using (var oCommand = new DBCommand(StoredProcedures.dipLookupNationality.usp_diplookupNationality_Update.ToString(), QueryType.StoredProcedure, parm,
                                                         Db.Conn.Connection))
                {
                    oCommand.Execute();
                    return Request.CreateResponse(HttpStatusCode.OK, "The record is saved successfully");

                }
            }
            else
            {
                using (var oCommand = new DBCommand(StoredProcedures.dipLookupNationality.usp_dipNationalityLookup_Insert.ToString(), QueryType.StoredProcedure, parm,
                                                        Db.Conn.Connection))
                {
                    oCommand.Execute();
                    return Request.CreateResponse(HttpStatusCode.OK, "The record is saved successfully");

                }
            }
        }
        #endregion

        #region Refund Rates
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
            return Request.CreateResponse(HttpStatusCode.NoContent, "No record found");
        }

        [HttpGet]
        public HttpResponseMessage SelectRefundRateById([FromUri] int id)
        {
            var oParams = new DBParamCollection
                              {
                                  {"@Id", id}
                              };

            using (var data = new RecordSet(StoredProcedures.DipRefundRate.usp_dipRefundRate_SelectById.ToString(), QueryType.StoredProcedure, oParams, Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NoContent, "No record found");
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
        [HttpPost]
        public HttpResponseMessage UpdateRefundRates([FromBody] dipRefundRate body)
        {
            var username = new UserController().GetUserSID();

            var parm = new DBParamCollection
                {
                     {"@RefundRateID" ,body.RefundRateID},
                       {"@RefundExciseDuty" ,body.RefundExciseDuty},
                       {"@RefundFuelLevy",body.RefundFuelLevy},
                       {"@RefundEffectiveDate", body.RefundEffectiveDate},
                    {"@UserModified", new UserController().GetUserBySID(username).UserID},
                    {"@Lastmodified", DateTime.Now},
                    
                 };
            using (var oCommand = new DBCommand(StoredProcedures.DipRefundRate.usp_dipRefundRate_Update.ToString(), QueryType.StoredProcedure, parm,
                                                         Db.Conn.Connection))
            {
                oCommand.Execute();
                return Request.CreateResponse(HttpStatusCode.OK, "The record is saved successfully");

            }
        }
        #endregion
    }
}