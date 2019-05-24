﻿using System.ComponentModel.DataAnnotations;

namespace ExtStore2.Models
{
    public class CartItem
    {
        public int CartItemId { get; set; }
        [Required]
        public string UserId { get; set; }
        [Required]
        public int ProductId { get; set; }
        public int Count { get; set; }

        public virtual User User { get; set; }
        public virtual Product Product { get; set; }
    }
}