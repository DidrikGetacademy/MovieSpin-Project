using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace MovieSpin_Backend_Files
{
    public class Dbconnection : DbContext
    {
        public DbSet<Users> Users { get; set; }  // DbSet to represent the Users table

        public DbSet<project> project { get; set; } // DbSet to represent the project table

        public Dbconnection(DbContextOptions<Dbconnection> options) : base(options)
        {

        }
    }
}
