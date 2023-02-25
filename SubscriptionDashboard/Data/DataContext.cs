
using Microsoft.EntityFrameworkCore;
using SubscriptionDashboard.Entities;

namespace SubscriptionDashboard.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Contract> Contracts { get; set; }
        public DbSet<Package> Packages { get; set; }
    }
}
