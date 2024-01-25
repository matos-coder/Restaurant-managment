using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestaurantInfrastructure.Data
{
    public class RmAuthDbContext : IdentityDbContext
    {
        public RmAuthDbContext(DbContextOptions options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            var readerRoleId = "d86e23ff-ba00-4a11-8f73-5a2e26cf3276";
            var writerRoleId = "d27658df-9992-45d5-9896-df28dbd3042e";

            var roles = new List<IdentityRole>
            {
                new IdentityRole
                {
                    Id = readerRoleId,
                    Name = "Reader",
                    ConcurrencyStamp = readerRoleId,
                    NormalizedName = "Reader".ToUpper()
                },
                new IdentityRole
                {
                    Id = writerRoleId,
                    Name = "Writer",
                    ConcurrencyStamp = writerRoleId,
                    NormalizedName = "Writer".ToUpper()
                }
            };
            builder.Entity<IdentityRole>().HasData(roles);
        }
    }
}
