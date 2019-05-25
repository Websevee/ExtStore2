using System;
using System.Web.Mvc;
using ExtStore2.Controllers;
using ExtStore2.DAL;
using ExtStore2.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;

namespace ExtStore2.Tests.Controllers
{
    [TestClass]
    public class OrderControllerTest
    {
        [TestMethod]
        public void GetCart()
        {
            // Arrange
            
            var mock = new Mock<UnitOfWork>();
            mock.Setup(a => a.CartRepository.GetByID(1)).Returns(new CartItem());
            OrderController controller = new OrderController(mock.Object);

            // Act
            JsonResult result = controller.GetCart() as JsonResult;

            // Assert
            Assert.IsNotNull(result.Data);
        }
    }
}
