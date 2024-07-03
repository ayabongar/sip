
using System.Net.Http;
using System.Net;
using System.Web.Http.Cors;
using System.Web.Http;

using Sars.Systems.Data;
using System.Collections.Generic;
using System.Linq;
using System;
using DIPS.Models;
using DIPS.Db;
using Sars.Systems.Security;
using System.Configuration;
using System.Security.Cryptography;
using System.DirectoryServices.AccountManagement;

namespace DIPS.Controllers
{
    [Authorize]
    //[EnableCors(origins: "*", headers: "*", methods: "*", PreflightMaxAge = 1800, SupportsCredentials = true)]
    public class UserController : ApiController
    {       

        [HttpGet]
        [Route("api/user/AuthenticateUser")]
        [System.Obsolete]
        public HttpResponseMessage AuthenticateUser()
        {
            if (User != null)
            {
               var username = User.Identity.Name.Substring(User.Identity.Name.LastIndexOf(@"\") + 1);               
                //new EmployeeInfoController().GetEmployeeInfoBySid(username);
                return Request.CreateResponse(HttpStatusCode.OK, GetUserBySID(username)); 
            }
            else
            {
                //This code never execute as we have used Authorize attribute on action method  
                return Request.CreateResponse(HttpStatusCode.OK, new
                {
                    status = (int)HttpStatusCode.BadRequest,
                    isAuthenticated = false,
                    isLibraryAdmin = false,
                    username = ""
                });

            }

        }

        [HttpGet]
        //[Route("api/user/GetAllUser")]
        [System.Obsolete]
        public HttpResponseMessage GetAllUser()
        {        
            using (var data = new RecordSet("[dbo].[usp_dipUser_SelectAll]", QueryType.StoredProcedure, null, Db.Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {                  
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0].ToList<UserManager>());
                }
            }
            return Request.CreateResponse(HttpStatusCode.OK, new List<UserManager>());

        }
        [HttpGet]
        //[Route("api/user/GetUserRoles")]
        [System.Obsolete]
        public HttpResponseMessage GetUserRoles()
        {
            using (var data = new RecordSet(StoredProcedures.sysRoles.usp_sysRoles_GetAllRoles.ToString(), QueryType.StoredProcedure, null, Db.Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {                
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0]);
                }
            }
            return Request.CreateResponse(HttpStatusCode.OK, new List<UserManager>());

        }
        [HttpGet]
        //[Route("api/user/GetUserBySID")]
        [System.Obsolete]
        public UserManager GetUserBySID(string sid)
        {
            var oparams = new DBParamCollection
              {
                 {"@SID",sid},
              };
            using (var data = new RecordSet("[dbo].[usp_dipUser_GetUserBySID]", QueryType.StoredProcedure, oparams, Db.Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return  data.Tables[0].ToList<UserManager>()[0];
                }
            }
            return null;

        }

        [HttpGet]
        //[Route("api/user/GetUserBySID")]
        [System.Obsolete]
        public List<UserManager> GetUserByRoleID(int roleId)
        {
            var oparams = new DBParamCollection
              {
                 {"@roleId",roleId},
              };
            using (var data = new RecordSet("[dbo].[usp_dipUser_GetUserByRoleId]", QueryType.StoredProcedure, oparams, Db.Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return data.Tables[0].ToList<UserManager>();
                }
            }
            return null;

        }
        [HttpGet]
        //[Route("api/user/GetHttpUserBySID/sid")]
        [System.Obsolete]
        public HttpResponseMessage GetHttpUserBySID([FromUri]string sid)
        {
            var oparams = new DBParamCollection
              {
                 {"@SID",sid},
              };
            using (var data = new RecordSet("[dbo].[usp_dipUser_GetUserBySID]", QueryType.StoredProcedure, oparams, Db.Conn.DIPSConnectionString))
            {
                if (data.HasRows)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data.Tables[0].ToList<UserManager>()[0]);
                }
            }
            return null;

        }
        public string GetUserSID()
        {
            if (User != null)
            {
                return User.Identity.Name.Substring(User.Identity.Name.LastIndexOf(@"\") + 1);             
                
            }
            return null;

        }

        [HttpPost]
        [Route("api/user/Save")]
        [System.Obsolete]

        // [EnableCors(origins: "*", headers: "*", methods: "*", PreflightMaxAge = 1800, SupportsCredentials = true)]
        public void Save([FromBody]UserManager body)
        {
            var username = User.Identity.Name.Substring(User.Identity.Name.LastIndexOf(@"\") + 1);
            var oParams = new DBParamCollection
            {
               {"@UserID" ,body.UserID},
               {"@UserCode" ,body.UserCode},
               {"@UserFullName",body.UserFullName},
               {"@IsActive", body.IsActive},
               {"@LastModified",DateTime.Now},
               {"@UserModified",   GetUserBySID(username).UserID},
               {"@RoleId",body.RoleId},
            };
            using (
                var oCommand = new DBCommand(StoredProcedures.dipUsers.usp_dipUser_Update.ToString(), QueryType.StoredProcedure, oParams,
                                              Db.Conn.Connection))
            {
                oCommand.Execute();
               
            }
            
        }

[HttpPost]
[Route("api/user/RegisterUser")]
[System.Obsolete]
public HttpResponseMessage RegisterUser([FromBody]UserManager body)
{
    var username = User.Identity.Name.Substring(User.Identity.Name.LastIndexOf(@"\") + 1);
    var oParams = new DBParamCollection
    {
       {"@UserID" ,body.UserID},
       {"@UserCode" ,body.UserCode},
       {"@UserFullName",body.UserFullName},
       {"@IsActive", body.IsActive},
       {"@LastModified",DateTime.Now},
       {"@UserModified",   GetUserBySID(username).UserID},
       {"@RoleId",body.RoleId},
    };
    using (var oCommand = new DBCommand(StoredProcedures.dipUsers.usp_dipUser_Update.ToString(), QueryType.StoredProcedure, oParams, Db.Conn.Connection))
    {
        oCommand.Execute();
    }

    // Send registration email to the user
    SendRegistrationEmailToUser(body.Email);

    // Send notification email to supervisors
    SendNotificationEmailToSupervisors();

    return Request.CreateResponse(HttpStatusCode.OK);
}

private void SendRegistrationEmailToUser(string userEmail)
{
    var subject = "Registration successful";
    var body = "Registration successful! Please wait for the super user to activate your account.";
    new EmailNotifier().SendEmail(userEmail, subject, body);
}

private void SendNotificationEmailToSupervisors()
{
    var subject = "New User Registration";
    var body = "A new user has registered and is awaiting approval.";
    var supervisors = GetUserByRoleID(2);
    if (supervisors != null)
    {
        foreach (var supervisor in supervisors)
        {
            new EmailNotifier().SendEmail(supervisor.Email, subject, body);
        }
    }
}


        [HttpGet]
        //[Route("api/user/GetADUser/sid")]
        [System.Obsolete]
        public Models.ADUser GetADUser(string samAccountName)
        {
            try
            {
                var context = new PrincipalContext(ContextType.Domain,
                                                   ConfigurationManager.AppSettings["domain"]);
                var userPrincipal = UserPrincipal.FindByIdentity(context, IdentityType.SamAccountName,
                                                                 samAccountName);
                if (userPrincipal != null)
                {
                    return new Models.ADUser
                    {
                        Mail = userPrincipal.EmailAddress,
                        Name = userPrincipal.GivenName,
                        Surname = userPrincipal.Surname,
                        SID = userPrincipal.SamAccountName,
                        Telephone = userPrincipal.VoiceTelephoneNumber,
                        FullName = userPrincipal.Name
                    };
                }
                userPrincipal = UserPrincipal.FindByIdentity(context, IdentityType.Name,
                                                             samAccountName);
                if (userPrincipal != null)
                {
                    return new Models.ADUser
                    {
                        Mail = userPrincipal.EmailAddress,
                        Name = userPrincipal.GivenName,
                        Surname = userPrincipal.Surname,
                        SID = string.Format("S{0}", userPrincipal.SamAccountName.Substring(1)),
                        Telephone = userPrincipal.VoiceTelephoneNumber,
                        FullName = userPrincipal.Name
                    };
                }
            }
            catch (Exception exception)
            {
                //throw exception;
                return new Models.ADUser
                {
                    Mail = "mmakhubu@sars.gov.za",
                    Name = "Mzwakhe",
                    Surname = "Makhubu",
                    Telephone = "0124226042",
                    FullName = "Mzwakhe Makhubu",
                    SID = "s2022311"
                };
            }
            return null;
        }
    }

   
}
