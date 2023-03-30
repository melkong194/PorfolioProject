using Core.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Reflection;

namespace Infrastructure.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        {

        }

        public DbSet<Porf> Porfs { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<PorfType> PorfTypes { get; set; }
        public DbSet<PostType> PostTypes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        
            if(Database.ProviderName == "Microsoft.EntityFramework.Sqlite")
            {
                foreach(var entityType in modelBuilder.Model.GetEntityTypes())
                {
                    var properties = entityType.ClrType.GetProperties()
                        .Where(p => p.PropertyType == typeof(decimal));

                    foreach (var property in properties)
                    {
                        modelBuilder.Entity(entityType.Name).Property(property.Name)
                            .HasConversion<double>();
                    }
                }
            }
        }

 
    }
}

