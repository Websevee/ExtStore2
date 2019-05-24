using System.ComponentModel.DataAnnotations;

namespace ExtStore2.Models
{
    public class Product
    {
        public int ProductID { get; set; }
        public string Code { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        public int Price { get; set; }
        [StringLength(30, MinimumLength = 3)]
        public string Category { get; set; }
    }
}