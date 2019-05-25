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
    public class AccountControllerTest
    {
        [TestMethod]
        public void GetCart()
        {
            // Arrange
            /*
            var mock = new Mock<UnitOfWork>();
            mock.Setup(a => a.CartRepository.GetByID(1)).Returns(new CartItem());*/
            AccountController controller = new AccountController();

            // Act
            var result = controller.Register(new RegisterViewModel { Email = "user@mail.ru", Password = "111111", Name = "User" });

            // Assert
            Assert.IsNotNull(result.Result.Data);
        }
    }
}