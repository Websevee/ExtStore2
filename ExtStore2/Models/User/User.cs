using Microsoft.AspNet.Identity.EntityFramework;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ExtStore2.Models
{
    public class User : IdentityUser
    {
        [Required]
        [Display(Name = "Имя пользователя")]
        [StringLength(50)]
        public string Name { get; set; }
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public string Code { get; set; }
        public string Address { get; set; }
        [Range(0, 100)]
        public int Discount { get; set; }
        public virtual ICollection<CartItem> Cart { get; set; }
    }
}