using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CRUDAPI.Models
{
    public class DataAccess :DbContext
    {
        public DataAccess():base("DBC")
        {
                
        }
        public DbSet<Employee> Employees { get; set; }
    }
}