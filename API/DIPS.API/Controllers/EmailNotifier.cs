using DIPS.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Web;

namespace DIPS.Controllers
{
    public class EmailNotifier : System.Web.UI.Page
    {
        [Obsolete]
        public void SendAprovalNotification(string asignedUserSID,string groupId, string subject ,string groupClaimStatus,string url,string[] emailCss = null)
        {
            try
            {

             
                var userAssigned = new UserController().GetUserBySID(asignedUserSID);

                var subjectH = subject;
                var username = new UserController().GetUserSID();
                if (HttpContext.Current.Request.PhysicalApplicationPath != null)
                {
                    var templateDir = Path.Combine(HttpContext.Current.Request.PhysicalApplicationPath, "Emails", "ClaimsAssigned.html");
                    var tempate = File.ReadAllText(templateDir);

                    if (groupId != null)
                    {
                        var body = string.Format(tempate,
                                                 userAssigned.UserFullName,
                                                 url,
                                                 groupId,
                                                 groupId,
                                                 groupClaimStatus,
                                                 new UserController().GetUserBySID(username).UserFullName,
                                                DateTime.Today.ToString("yyyy-MM-dd")                                                
                            );

                        using (var client = new Sars.Systems.Mail.SmtpServiceClient("basicHttpEndPoint"))
                        {
                            var sendToUser = new UserController().GetADUser(asignedUserSID);
                            if (sendToUser != null)
                            {
                                var oMessage = new Sars.Systems.Mail.SmtpMessage
                                {
                                    From = "dips@sars.gov.za",
                                    Body = body,
                                    IsBodyHtml = true,
                                    Subject = subjectH,
                                    To = new[] { sendToUser.Mail },
                                    CC = emailCss,
                                };
                                client.Send2(oMessage);
                               // IncidentTrackingManager.SaveIncidentEmailLog(body, subjectH, sendToUser.SID, sendToUser.Mail,
                                //                                               this.IncidentID, this.ProcessID);
                            }
                        }
                    }
                }
            }
            catch (Exception)
            {

            }
        }

        [Obsolete]
        public void ClaimApprovedNotification(string asignedUserSID, string subject,string url, string[] emailCss = null)
        {
            try
            {


                var userAssigned = new UserController().GetUserBySID(asignedUserSID);

                var subjectH = subject;
                var username = new UserController().GetUserSID();
                if (HttpContext.Current.Request.PhysicalApplicationPath != null)
                {
                    var templateDir = Path.Combine(HttpContext.Current.Request.PhysicalApplicationPath, "Emails", "approved.html");
                    var tempate = File.ReadAllText(templateDir);
                
                        var body = string.Format(tempate,
                                                 userAssigned.UserFullName,
                                                 url,
                                                 "Approved",
                                                  "Awaiting Payment",                                         
                                                
                                                 new UserController().GetUserBySID(username).UserFullName,
                                                DateTime.Today.ToString("yyyy-MM-dd")
                            );

                        using (var client = new Sars.Systems.Mail.SmtpServiceClient("basicHttpEndPoint"))
                        {
                            var sendToUser = new UserController().GetADUser(asignedUserSID);
                            if (sendToUser != null)
                            {
                                var oMessage = new Sars.Systems.Mail.SmtpMessage
                                {
                                    From = "dips@sars.gov.za",
                                    Body = body,
                                    IsBodyHtml = true,
                                    Subject = subjectH,
                                    To = new[] { sendToUser.Mail },
                                    CC = emailCss,
                                };
                                client.Send2(oMessage);
                                // IncidentTrackingManager.SaveIncidentEmailLog(body, subjectH, sendToUser.SID, sendToUser.Mail,
                                //                                               this.IncidentID, this.ProcessID);
                            }
                        }
                    
                }
            }
            catch (Exception)
            {

            }
        }

        [Obsolete]
        public void ClaimRejectedNotification(string asignedUserSID, string subject, string reason, string[] emailCss = null)
        {
            try
            {


                var userAssigned = new UserController().GetUserBySID(asignedUserSID);

                var subjectH = subject;
                var username = new UserController().GetUserSID();
                if (HttpContext.Current.Request.PhysicalApplicationPath != null)
                {
                    var templateDir = Path.Combine(HttpContext.Current.Request.PhysicalApplicationPath, "Emails", "rejected.html");
                    var tempate = File.ReadAllText(templateDir);

                    var body = string.Format(tempate,
                                                 userAssigned.UserFullName,                                                   
                                                 "Rejected",
                                                  reason,
                                                 new UserController().GetUserBySID(username).UserFullName,
                                                DateTime.Today.ToString("yyyy-MM-dd")
                                                
                            );

                        using (var client = new Sars.Systems.Mail.SmtpServiceClient("basicHttpEndPoint"))
                        {
                            var sendToUser = new UserController().GetADUser(asignedUserSID);
                            if (sendToUser != null)
                            {
                                var oMessage = new Sars.Systems.Mail.SmtpMessage
                                {
                                    From = "dips@sars.gov.za",
                                    Body = body,
                                    IsBodyHtml = true,
                                    Subject = subjectH,
                                    To = new[] { sendToUser.Mail },
                                    CC = emailCss,
                                };
                                client.Send2(oMessage);
                                // IncidentTrackingManager.SaveIncidentEmailLog(body, subjectH, sendToUser.SID, sendToUser.Mail,
                                //                                               this.IncidentID, this.ProcessID);
                            }
                        }
                    
                }
            }
            catch (Exception)
            {

            }
        }
        [Obsolete]
        public void ClaimReworkNotification(string asignedUserSID,  string subject, string reason, string[] emailCss = null)
        {
            try
            {
                var userAssigned = new UserController().GetUserBySID(asignedUserSID);
                var subjectH = subject;
                var username = new UserController().GetUserSID();
                if (HttpContext.Current.Request.PhysicalApplicationPath != null)
                {
                    var templateDir = Path.Combine(HttpContext.Current.Request.PhysicalApplicationPath, "Emails", "rework.html");
                    var tempate = File.ReadAllText(templateDir);

                        var body = string.Format(tempate,
                                                 userAssigned.UserFullName,                                                
                                                 "Re-work",
                                                  reason,
                                                 new UserController().GetUserBySID(username).UserFullName,
                                                 DateTime.Today.ToString("yyyy-MM-dd")
                                                 
                            );

                        using (var client = new Sars.Systems.Mail.SmtpServiceClient("basicHttpEndPoint"))
                        {
                            var sendToUser = new UserController().GetADUser(asignedUserSID);
                            if (sendToUser != null)
                            {
                                var oMessage = new Sars.Systems.Mail.SmtpMessage
                                {
                                    From = "dips@sars.gov.za",
                                    Body = body,
                                    IsBodyHtml = true,
                                    Subject = subjectH,
                                    To = new[] { sendToUser.Mail },
                                    CC = emailCss,
                                };
                                client.Send2(oMessage);
                                // IncidentTrackingManager.SaveIncidentEmailLog(body, subjectH, sendToUser.SID, sendToUser.Mail,
                                //                                               this.IncidentID, this.ProcessID);
                            }
                        }
                    
                }
            }
            catch (Exception)
            {

            }
        }

    }


}