using BrowserNote.Models;
using Microsoft.EntityFrameworkCore;

namespace BrowserNote.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Note> Notes => Set<Note>();
        public DbSet<User> Users => Set<User>();
    }
}