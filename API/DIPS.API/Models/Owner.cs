using System;
using System.Data.Linq.Mapping;
using System.Collections.Generic;

namespace DIPS.Models
{
    [Table(Name = "Owner")]
    public class Owner : Sars.Systems.Data.DataAccessObject
    {
        public Owner()
        {

        }
        public Owner(string procedure, Dictionary<string, object> parameters) : base(procedure, parameters)
        {
        }
       
        [Column()]
        public int OwnerID { get; set; }
        [Column()]
        public string OwnerInitials { get; set; }

        [Column()]
        public string OwnerSurname { get; set; }
        [Column()]
        public string OwnerPassportNumber { get; set; }
        [Column()]
        public int OwnerMaritalStatus { get; set; }
        [Column()]
        public int TitleID { get; set; }
        [Column()]
        public int NationalityID { get; set; }
        [Column()]
        public int RankID { get; set; }

        [Column()]
        public string UserModified { get; set; }
        [Column()]
        public DateTime Lastmodified { get; set; }       
    }

}