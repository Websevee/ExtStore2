using ExtStore2.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using Moq;
using ExtStore2.Models;
using ExtStore2.DAL;

namespace ExtStore2.Tests.Controllers
{
    [TestClass]
    public class ProductControllerTest
    {
        [TestMethod]
        public void Index()
        {
            // Arrange
            ProductController controller = new ProductController();

            // Act
            JsonResult result = controller.Index(1, 5) as JsonResult;

            // Assert
            Assert.IsNotNull(result);
        }
    }
}
