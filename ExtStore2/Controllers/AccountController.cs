using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using ExtStore2.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;

namespace ExtStore2.Controllers
{
    public class AccountController : Controller
    {
        private MyUserManager UserManager
        {
            get
            {
                return HttpContext.GetOwinContext().GetUserManager<MyUserManager>();
            }
        }

        private MyRoleManager RoleManager
        {
            get
            {
                return HttpContext.GetOwinContext().GetUserManager<MyRoleManager>();
            }
        }

        private IAuthenticationManager AuthenticationManager
        {
            get
            {
                return HttpContext.GetOwinContext().Authentication;
            }
        }

        // РЕГИСТРАЦИЯ
        public async Task<JsonResult> Register(RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                User user = new User {
                    UserName = model.Email,
                    Email = model.Email,
                    Name = model.Name,
                    Address = model.Address,
                    Code = model.Code,
                    Discount = model.Discount
                };
                IdentityResult result = UserManager.Create(user, model.Password);

                if (result.Succeeded)
                {
                    ClaimsIdentity claim = await UserManager.CreateIdentityAsync(user,
                                            DefaultAuthenticationTypes.ApplicationCookie);
                    AuthenticationManager.SignOut();
                    AuthenticationManager.SignIn(new AuthenticationProperties
                    {
                        IsPersistent = true
                    }, claim);
                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        // АУТЕНТИФИКАЦИЯ
        [HttpPost]
        public async Task<JsonResult> Login(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                User user = await UserManager.FindAsync(model.Email, model.Password);

                if (user != null)
                {
                    ClaimsIdentity claim = await UserManager.CreateIdentityAsync(user,
                                            DefaultAuthenticationTypes.ApplicationCookie);
                    AuthenticationManager.SignOut();
                    AuthenticationManager.SignIn(new AuthenticationProperties
                    {
                        IsPersistent = true
                    }, claim);

                    return Json(new
                    {
                        user,
                        success = true
                    });
                }
            }
            return Json(new
            {
                success = false
            });

        }

        // ВЫХОД ИЗ ПРОФИЛЯ
        [HttpPost]
        public JsonResult Logout()
        {
            AuthenticationManager.SignOut(DefaultAuthenticationTypes.ApplicationCookie);
            return Json(new { success = true });
        }

        // УДАЛЕНИЕ ПОЛЬЗОВАТЕЛЯ
        [HttpPost]
        [Authorize(Roles = "admin")]
        public async Task<JsonResult> Delete(User _user)
        {
            User user = await UserManager.FindByEmailAsync(User.Identity.Name);

            if (user != _user)
            {
                IdentityResult result = await UserManager.DeleteAsync(_user);
                if (result.Succeeded)
                {
                    return Json(new { success = true });
                }
            }

            return Json(new { success = false });
        }

        // РЕДАКТИРОВАНИЕ ПОЛЬЗОВАТЕЛЯ
        [HttpPost]
        [Authorize(Roles = "admin")]
        public async Task<ActionResult> Edit(User model)
        {
            User user = await UserManager.FindByIdAsync(model.Id);

            if (user != null)
            {
                IdentityResult result = await UserManager.UpdateAsync(model);
                if (result.Succeeded)
                {
                    return Json(new { success = true });
                }
                else
                {
                    ModelState.AddModelError("", "Что-то пошло не так");
                }
            }
            else
            {
                ModelState.AddModelError("", "Пользователь не найден");
            }

            return Json(new { success = false });
        }


        public async Task<JsonResult> IsAuthenticated()
        {
            User user = await UserManager.FindByEmailAsync(User.Identity.Name);

            if (User.Identity.IsAuthenticated && user != null)
            {
                var admin = user.Roles.Any(elem => elem.RoleId == RoleManager.FindByName("admin").Id);

                return Json(new
                {
                    user,
                    admin,
                    success = true
                }, JsonRequestBehavior.AllowGet);
            }
            return Json(new { success = false });
        }


    }
}