using ExtStore2.DAL;
using ExtStore2.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace ExtStore2.Controllers
{
    //[Authorize]
    public class OrderController : Controller
    {
        private UnitOfWork unitOfWork = new UnitOfWork();

        private MyUserManager UserManager
        {
            get
            {
                return HttpContext.GetOwinContext().GetUserManager<MyUserManager>();
            }
        }

        private User _user
        {
            get
            {
                User user = UserManager.FindByEmail(User.Identity.Name);
                return user;
            }
        }
        
        public JsonResult GetCart()
        {
            User user = _user;

            if (user != null)
            {
                var cart = user.Cart;

                return Json(new
                {
                    data = cart.ToList(),
                    success = true
                }, JsonRequestBehavior.AllowGet);
            }

            return Json(new { success = false });
        }

        [HttpPost]
        public JsonResult AddCartItem(int productId)
        {
            User user = _user;

            var cartitem = user.Cart.FirstOrDefault(cart => cart.ProductId == productId);

            if (cartitem == null)
            {
                cartitem = new CartItem { UserId = user.Id, ProductId = productId, Count = 1 };

                unitOfWork.CartRepository.Insert(cartitem);
                unitOfWork.Save();
            }
            else
            {
                cartitem = unitOfWork.CartRepository.GetByID(cartitem.CartItemId);
                cartitem.Count++;

                unitOfWork.CartRepository.Update(cartitem);
                unitOfWork.Save();
            }

            return Json(new { success = true });
        }


        [HttpPost]
        public JsonResult CreateOrder()
        {
            User user = _user;

            if (user != null && user.Cart.Count != 0)
            {
                var cart = user.Cart;

                Order order = new Order();
                List<OrderItem> orderItems = new List<OrderItem>();

                cart.ToList().ForEach(i => orderItems.Add(new OrderItem { ProductId = i.ProductId, ItemsCount = i.Count }));

                order.UserId = user.Id;
                order.OrderItems = orderItems;

                unitOfWork.OrderRepository.Insert(order);

                foreach (var item in cart)
                {
                    unitOfWork.CartRepository.Delete(item.CartItemId);
                }

                unitOfWork.Save();

                return Json(new { success = true });
            }

            return Json(new { success = false });
        }

        public JsonResult GetUserOrders()
        {
            return Json(new { data = unitOfWork.OrderRepository.Get().Where(i => i.UserId == _user.Id) }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create([Bind(Include = "UserId,OrderDate,ShipmentDate,OrderNumber,Status")] Order order)
        {
            if (ModelState.IsValid)
            {
                unitOfWork.OrderRepository.Insert(order);
                unitOfWork.Save();

                return Json(new { success = true });
            }

            return Json(new { success = false });
        }

        [HttpPost]
        public ActionResult Edit([Bind(Include = "OrderDate,ShipmentDate,OrderNumber,Status")] Order order)
        {
            if (ModelState.IsValid)
            {
                unitOfWork.OrderRepository.Update(order);
                unitOfWork.Save();

                return Json(new { success = true });
            }

            return Json(new { success = false });
        }

        [HttpPost]
        public ActionResult Delete(int id)
        {
            unitOfWork.OrderRepository.Delete(id);
            unitOfWork.Save();

            return Json(new { success = true });
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                unitOfWork.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}