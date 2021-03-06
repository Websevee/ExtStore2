﻿using System;
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
using PagedList;

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
                    Discount = 0
                };
                IdentityResult result = UserManager.Create(user, model.Password);

                UserManager.AddToRole(user.Id, "user"); // добавление роли

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
                var admin = user.Roles.Any(elem => elem.RoleId == RoleManager.FindByName("admin").Id);

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
                        admin,
                        success = true
                    }, JsonRequestBehavior.AllowGet);
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
            if (User.Identity.IsAuthenticated)
            {
                User user = await UserManager.FindByEmailAsync(User.Identity.Name);

                if (user != null)
                {
                    var admin = user.Roles.Any(elem => elem.RoleId == RoleManager.FindByName("admin").Id);

                    List<string> roles = new List<string>();
                    user.Roles.ToList().ForEach(i => roles.Add(RoleManager.FindById(i.RoleId).Name));


                    return Json(new
                    {
                        user = new
                        {
                            Email = user.Email,
                            Name = user.Name,
                            Address = user.Address,
                            Code = user.Code,
                            Discount = user.Discount,
                            Roles = roles
                        },
                        admin,
                        success = true
                    }, JsonRequestBehavior.AllowGet);
                }
            }
                 
            return Json(new { success = false }, JsonRequestBehavior.AllowGet);
        }

        [Authorize(Roles="admin")]
        public JsonResult GetUsers(int? page, int? limit)
        {
            var _list = UserManager.Users.ToList();
            var total = _list.Count();

            int pageSize = (limit ?? total);
            int pageNumber = (page ?? 1);

            return Json(new
            {
                data = _list.ToPagedList(pageNumber, pageSize),
                success = true,
                total
            }, JsonRequestBehavior.AllowGet);

        }

    }
}