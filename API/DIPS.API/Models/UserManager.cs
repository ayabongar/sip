using System;
using System.Data.Linq.Mapping;
using System.Collections.Generic;

namespace DIPS.Models
{
    [Table(Name = "UserManager")]
    public class UserManager : Sars.Systems.Data.DataAccessObject
    {
        public UserManager()
        {
        }
        public UserManager(string procedure, Dictionary<string, object> parameters) : base(procedure, parameters)
        {
        }
        [Column()]
        public int UserID { get; set; }
        [Column()]
        public string UserCode { get; set; }
        [Column()]
        public string UserFullName { get; set; }
        [Column()]
        public Boolean IsActive { get; set; }
        [Column()]
        public int CreatedBy { get; set; }
        [Column()]
        public DateTime CreatedDate { get; set; }
        [Column()]
        public int UserModified { get; set; }
        [Column()]
        public DateTime Lastmodified { get; set; }

        [Column()]
        public string RoleName { get; set; }
        [Column()]
        public int RoleId { get; set; }
    }


    public class ADUser
    {
        [Column(Name = "SID")]
        public string SID { get; set; }

        [Column(Name = "FirstName")]
        public string Name { get; set; }

        [Column(Name = "Surname")]
        public string Surname { get; set; }

        [Column(Name = "EmailAddress")]
        public string Mail { get; set; }

        [Column(Name = "Telephone")]
        public string Telephone { get; set; }

        [Column(Name = "FullName")]
        public string FullName { get; set; }

        public bool FoundBySID { get; set; }
    }
}