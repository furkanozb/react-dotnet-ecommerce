using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().HasData(
                new Product { Id = 1, Name = "Iphone 13", Description = "Description 1", Price = 100, ImageUrl = "https://via.placeholder.com/150", IsActive = true, Stock = 100 },
                new Product { Id = 2, Name = "Iphone 14", Description = "Description 2", Price = 200, ImageUrl = "https://via.placeholder.com/150", IsActive = true, Stock = 50 },
                new Product { Id = 3, Name = "Iphone 15", Description = "Description 3", Price = 300, ImageUrl = "https://via.placeholder.com/150", IsActive = true, Stock = 30 },
                new Product { Id = 4, Name = "Iphone 16", Description = "Description 4", Price = 400, ImageUrl = "https://via.placeholder.com/150", IsActive = true, Stock = 20 }
            );
        }
    }
}