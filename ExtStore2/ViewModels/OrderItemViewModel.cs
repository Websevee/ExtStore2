using ExtStore2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ExtStore2.ViewModels
{
    public class OrderItemViewModel
    {
        public int Id { get; set; }

        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public int ItemsCount { get; set; }
        public int ItemPrice { get; set; }

        public virtual Order Order { get; set; }
        public virtual Product Product { get; set; }
    }
}