using System;
using System.Data.Linq.Mapping;
using System.Collections.Generic;

namespace DIPS.Models
{
    /// <summary>
    /// Summary description for Vehicles
    /// </summary>
    [Table(Name = "Vehicles")]
    public class Vehicles : Sars.Systems.Data.DataAccessObject
    {
        public Vehicles()
        {

        }
        public Vehicles(string procedure, Dictionary<string, object> parameters) : base(procedure, parameters)
        {
        }
        [Column()]
        public int ClientID { get; set; }
        [Column()]
        public int VehicleID { get; set; }

        [Column()]
        public string VehicleRegistration { get; set; }
        [Column()]
        public string VehicleRefNumber { get; set; }
        [Column()]
        public DateTime VehicleRefDate { get; set; }
        [Column()]
        public string VehicleMake { get; set; }
        [Column()]
        public string VehicleModel { get; set; }
        [Column()]
        public int VehicleTankCapacity { get; set; }
        [Column()]
        public DateTime VehicleEffectiveDate { get; set; }
        [Column()]
        public DateTime VehiclePurchaseDate { get; set; }
        [Column()]
        public DateTime VehicleCancellationDate { get; set; }
        [Column()]
        public string TemporaryRegistration { get; set; }
        [Column()]
        public string VehiclesVIN { get; set; }
        [Column()]
        public int FuelTypeID { get; set; }
        [Column()]
        public string VehicleType { get; set; }
        [Column()]
        public string OwnerType { get; set; }
        [Column()]
        public int OwnerID { get; set; }
        [Column()]
        public int UserModified { get; set; }
        [Column()]
        public DateTime Lastmodified { get; set; }
        [Column()]
        public string RegistrationReason { get; set; }

       
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
        public string OwnerStatus { get; set; }

    }
}