using Microsoft.EntityFrameworkCore;

class MyDb : DbContext
{
    public MyDb(DbContextOptions<MyDb> options)
        : base(options) {}

        public DbSet<User> Users => Set<User>();
        public DbSet<Product> Products => Set<Product>();
        public DbSet<CartProduct> CartProducts => Set<CartProduct>(); 
}