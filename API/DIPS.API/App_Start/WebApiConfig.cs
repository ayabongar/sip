using Microsoft.AspNetCore.Cors.Infrastructure;
using System.Configuration;
using System.Web.Http;
using System.Web.Http.Cors;

namespace DIPS
{
   
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            //config.EnableCors();
          //  config.EnableCors(new EnableCorsAttribute(CorsOptions.all, "", ""))
            // Web API routes
            config.MapHttpAttributeRoutes(); 

            config.Routes.MapHttpRoute(
                name: "MapByAction",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional, extension = RouteParameter.Optional }           
            );
            var allowedRequestUrl = ConfigurationManager.AppSettings["AllowedRequestUrl"];

            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new System.Net.Http.Headers.MediaTypeHeaderValue("application/json"));           
           // config.EnableCors(new EnableCorsAttribute(allowedRequestUrl, "x-requested-with, Content-Type, origin, authorization, accept, client-security-token", "*") { SupportsCredentials = true });
            config.EnableCors(new EnableCorsAttribute(allowedRequestUrl, "*", "*") { SupportsCredentials = true });
        }
    }
}
