using System.Data.Entity;
using Microsoft.AspNet.Identity.EntityFramework;
using ExtStore2.Models;

namespace ExtStore2.DAL
{
    public class ApplicationContext : IdentityDbContext<User>
    {
        public ApplicationContext() : base("Database") { }

        public static ApplicationContext Create()
        {
            return new ApplicationContext();
        }

        //public DbSet<Product> Products { get; set; }

        //public DbSet<CartItem> CartItems { get; set; }
        //public DbSet<Order> Orders { get; set; }
        //public DbSet<OrderItem> OrderItems { get; set; }


    }
}