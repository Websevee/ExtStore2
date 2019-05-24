namespace ExtStore2.Migrations
{
    using ExtStore2.Models;
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ExtStore2.DAL.ApplicationContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "ExtStore2.DAL.ApplicationContext";
        }

        protected override void Seed(ExtStore2.DAL.ApplicationContext context)
        {
            var userManager = new MyUserManager(new UserStore<User>(context));
            var roleManager = new MyRoleManager(new RoleStore<MyRole>(context));

            // создаем две роли
            var role1 = new MyRole { Name = "admin" };
            var role2 = new MyRole { Name = "user" };

            // добавляем роли в бд
            roleManager.Create(role1);
            roleManager.Create(role2);

            // создаем пользователей
            var user = new User
            {
                Email = "admin@mail.ru",
                UserName = "admin@mail.ru",
                Name = "Admin",
                Address = "My address",
                Code = "My code",
                Discount = 50
            };
            string password = "111111";
            var result = userManager.Create(user, password);

            // если создание пользователя прошло успешно
            if (result.Succeeded)
            {
                // добавляем для пользователя роли
                userManager.AddToRole(user.Id, role1.Name);
                userManager.AddToRole(user.Id, role2.Name);
            }
            
            var products = new List<Product>
            {
                new Product { Name = "Продукт 1", Price = 100, Category = "Category", Code = "Code 1" },
                new Product { Name = "Продукт 2", Price = 500, Category = "Category", Code = "Code 2" },
                new Product { Name = "Новый продукт 3", Price = 8350, Category = "New category", Code = "New code 1" },
                new Product { Name = "Новый продукт 4", Price = 15613, Category = "New category", Code = "New code 2" }
            };
            products.ForEach(s => context.Products.AddOrUpdate(p => p.Name, s));
            context.SaveChanges();
        }
    }
}
