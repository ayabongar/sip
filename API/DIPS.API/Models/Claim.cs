using System;
using System.Data.Linq.Mapping;
using System.Collections.Generic;

namespace DIPS.Models
{
    [Table(Name = "Claim")]
    public class Claim : Sars.Systems.Data.DataAccessObject
    {
        public Claim()
        {
        }
        public Claim(string procedure, Dictionary<string, object> parameters) : base(procedure, parameters)
        {
        }
		[Column()]
		public int GroupId { get; set; }
		[Column()]
		public int GroupStatusID { get; set; }
		[Column()]
		public string GroupType { get; set; }
		[Column()]
		public int ClientCessionariID { get; set; }
		[Column()]
		public string GroupOrigin { get; set; }
		[Column()]
		public string GroupDateCreated { get; set; }
		[Column()]
		public string GroupStatusReason { get; set; }
		[Column()]
		public string ProcessStatus { get; set; }
		[Column()]
		public int ClaimID { get; set; }
		[Column()]
		public int ClaimVehicleID { get; set; }
		[Column()]
		public string ClaimOrigin { get; set; }
		[Column()]
		public string ClaimRefNumber { get; set; }
		[Column()]
		public DateTime ClaimRefDate { get; set; }
		[Column()]
		public DateTime ClaimReceiveDate { get; set; }
		[Column()]
		public float ClaimAmount { get; set; }
		[Column()]
		public int ClaimRefundrateID { get; set; }
		[Column()]
		public int ClaimClientCessionaryLinkID { get; set; }
		[Column()]
		public float ClaimPaymentAmount { get; set; }
		[Column()]
		public DateTime ClaimPaymentDate { get; set; }
		[Column()]
		public int ClaimStatusID { get; set; }
		[Column()]
		public string ClaimStatusReason { get; set; }
		[Column()]
		public int InvoiceID { get; set; }
		[Column()]
		public int InvoiceClaimID { get; set; }
		[Column()]
		public string InvoiceNumber { get; set; }
		[Column()]
		public float InvoiceAmount { get; set; }
		[Column()]
		public DateTime InvoiceDate { get; set; }
		[Column()]
		public float InvoiceLitres { get; set; }
		[Column()]
		public string InvoiceSuppliersName { get; set; }
		[Column()]
		public string InvoiceOdometerReading { get; set; }
		[Column()]
		public bool InvoiceRefundIndicator { get; set; }
		[Column()]
		public int InvoiceStatusID { get; set; }
		[Column()]
		public string InvoiceOrigin { get; set; }	
		
		[Column()]
		public int UserModified { get; set; }
		[Column()]
		public DateTime Lastmodified { get; set; }
	}
}