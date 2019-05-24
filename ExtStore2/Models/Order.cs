using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ExtStore2.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        public string UserId { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime OrderDate { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime ShipmentDate { get; set; }

        public int OrderNumber { get; set; }

        public string Status { get; set; }

        //public virtual User User { get; set; }
        public virtual ICollection<OrderItem> OrderItems { get; set; }

        public Order()
        {
            ShipmentDate = DateTime.Today;
            OrderDate = ShipmentDate;
            OrderNumber = new Random().Next(50);
            Status = "New";
        }
    }
}