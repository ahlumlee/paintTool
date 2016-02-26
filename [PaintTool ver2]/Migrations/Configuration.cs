namespace _PaintTool_ver2_.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using System.Security.Claims;
    internal sealed class Configuration : DbMigrationsConfiguration<_PaintTool_ver2_.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(_PaintTool_ver2_.Models.ApplicationDbContext context)
        {
            var userStore = new UserStore<ApplicationUser>(context);
            var userManager = new ApplicationUserManager(userStore);

            //create a new user
            var user = userManager.FindByName("admin@admin.com");
            if (user == null)
            {
                user = new ApplicationUser
                {
                    UserName = "admin@admin.com",
                    Email = "admin@admin.com",
                    FirstName = "Ahlum",
                    LastName = "Lee",
                };

                userManager.Create(user, "Secret123!");
                userManager.AddClaim(user.Id, new Claim("Admin", "true"));
                userManager.AddClaim(user.Id, new Claim("Awesomelever", "10"));
            }

            var user2 = userManager.FindByName("admin2@admin.com");
            if (user2 == null)
            {
                user2 = new ApplicationUser
                {
                    UserName = "admin2@admin.com",
                    Email = "admin2@admin.com",
                    FirstName = "Admin",
                    LastName = "Administrator",
                };
                userManager.Create(user2, "Secret1234!");
                userManager.AddClaim(user.Id, new Claim("Awesomelever", "9"));
            }

            #region Seed 

            Member[] members = new Member[]
            {
                new Member {FirstName="Bell", LastName ="Tinker", PhoneNumber= 2061231233, Email="bell@tinker.com"},
                new Member {FirstName="John", LastName ="Wick", PhoneNumber= 2061938484, Email="john@wick.com"},
                new Member {FirstName="Bill", LastName ="Tucker", PhoneNumber=2061231291, Email="bill@tucker.com"}
            };


            context.Members.AddOrUpdate(m => m.FirstName, members);
            
            #endregion

        }
    }
}
