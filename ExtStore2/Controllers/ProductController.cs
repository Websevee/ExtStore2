using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using ExtStore2.DAL;
using ExtStore2.Models;


namespace ExtStore2.Controllers
{
    [Authorize(Roles = "admin")]
    public class ProductController : Controller
    {
        private UnitOfWork unitOfWork = new UnitOfWork();

        [AllowAnonymous]
        public JsonResult Index(int? page)
        {
            var _list = unitOfWork.ProductRepository.Get();

            return Json(new
            {
                data = _list,
                success = true
            }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create([Bind(Include = "Code,Name,Price,Category")] Product product)
        {
            bool success = false;
            string message = "no record found";

            if (ModelState.IsValid)
            {
                unitOfWork.ProductRepository.Insert(product);
                unitOfWork.Save();
                success = true;
                message = "TRUE";
            }

            return Json(new { product, success, message });
        }

        [HttpPost]
        public JsonResult Edit([Bind(Include = "ProductId,Code,Name,Price,Category")] Product product)
        {
            bool success = false;
            string message = "no record found";

            if (ModelState.IsValid)
            {
                unitOfWork.ProductRepository.Update(product);
                unitOfWork.Save();
                success = true;
                message = "TRUE";
            }

            return Json(new { product, success, message });
        }

        [HttpPost]
        public JsonResult Delete(int id)
        {
            bool success = false;
            string message = "no record found";

            unitOfWork.ProductRepository.Delete(id);
            unitOfWork.Save();
            success = true;
            message = "TRUE";

            return Json(new { success, message });
        }
    }
}