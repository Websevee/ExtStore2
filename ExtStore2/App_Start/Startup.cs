using Microsoft.Owin;
using Owin;
using ExtStore2.Models;
using Microsoft.Owin.Security.Cookies;
using Microsoft.AspNet.Identity;
using ExtStore2.DAL;


[assembly: OwinStartup(typeof(ExtStore2.Startup))]

namespace ExtStore2
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.CreatePerOwinContext<ApplicationContext>(ApplicationContext.Create);
            app.CreatePerOwinContext<MyUserManager>(MyUserManager.Create);

            // регистрация менеджера ролей
            app.CreatePerOwinContext<MyRoleManager>(MyRoleManager.Create);

            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationType = DefaultAuthenticationTypes.ApplicationCookie,
                LoginPath = new PathString("/Account/Login"),
            });
        }
    }
}