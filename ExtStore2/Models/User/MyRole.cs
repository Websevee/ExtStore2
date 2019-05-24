using Microsoft.AspNet.Identity.EntityFramework;

namespace ExtStore2.Models
{
    public class MyRole : IdentityRole
    {
        public MyRole() { }

        public string Description { get; set; }
    }
}