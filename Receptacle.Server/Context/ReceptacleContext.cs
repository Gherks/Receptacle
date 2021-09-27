using Receptacle.Server.Entities;
using Microsoft.EntityFrameworkCore;

namespace Receptacle.Server.Context
{
    public class ReceptacleContext : DbContext
    {
        public ReceptacleContext()
        {
            this.ChangeTracker.LazyLoadingEnabled = false;
        }

        public ReceptacleContext(DbContextOptions options) : base(options)
        {
            this.ChangeTracker.LazyLoadingEnabled = false;
        }

        public DbSet<Article> Article { get; set; }
        public DbSet<Recipe> Recipe { get; set; }
        public DbSet<Ingredient> Ingredient { get; set; }
    }
}
