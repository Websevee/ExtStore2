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
    public class HomeControllerTest
    {
        [TestMethod]
        public void Index()
        {
            // Arrange
            HomeController controller = new HomeController();

            // Act
            ViewResult result = controller.Index() as ViewResult;

            // Assert
            Assert.IsNotNull(result);
        }
    }
}
