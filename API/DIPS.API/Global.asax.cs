using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace DIPS
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);                            
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }

        protected void Application_BeginRequest()
        {
            //var allowedRequestUrl = ConfigurationManager.AppSettings["AllowedRequestUrl"];
            //string allowedOrigin = allowedRequestUrl;
            //var origin = HttpContext.Current.Request.Headers["Origin"];
            //if (origin != null && allowedOrigin.Contains(origin))
            //{
            //    HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", origin);
            //    HttpContext.Current.Response.AddHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            //    HttpContext.Current.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Accept,x-requested-with, origin, authorization, client-security-token");
            //    HttpContext.Current.Response.AddHeader("Access-Control-Allow-Credentials", "true");
            //    HttpContext.Current.Response.AddHeader("Access-Control-Max-Age", "1728000");
            //    HttpContext.Current.Response.End();
            //}

            if (Request.Headers.AllKeys.Contains("Origin") && Request.HttpMethod == "OPTIONS")
            {
                var allowedRequestUrl = ConfigurationManager.AppSettings["AllowedRequestUrl"];
                // These headers are handling the "pre-flight" OPTIONS call sent by the browser
                HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", allowedRequestUrl);
                HttpContext.Current.Response.AddHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
                //HttpContext.Current.Response.AddHeader("Access-Control-Allow-Headers", "*");
                HttpContext.Current.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Accept,x-requested-with, origin, authorization, client-security-token");
                HttpContext.Current.Response.AddHeader("Access-Control-Allow-Credentials", "true");
                HttpContext.Current.Response.AddHeader("Access-Control-Max-Age", "1728000");
                HttpContext.Current.Response.End();
            }
        }
    }
}
