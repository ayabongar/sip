using System;
using System.Data.Linq.Mapping;
using System.Collections.Generic;

namespace DIPS.Models
{
    [Table(Name = "Client")]
    public class Client : Sars.Systems.Data.DataAccessObject
    {
        public Client()
        {
        }
        public Client(string procedure, Dictionary<string, object> parameters) : base(procedure, parameters)
        {
        }
		[Column()]
		public int ClientID { get; set; }
		[Column()]
		public string strClientID { get; set; }
		[Column()]
		public int ClientTypeID { get; set; }
		[Column()]
		public string ClientName { get; set; }
		[Column()]
		public string ClientRefNumber { get; set; }
		[Column()]
		public DateTime ClientRefDate { get; set; }
		[Column()]
		public DateTime ClientEffectiveDate { get; set; }
		[Column()]
		public DateTime ClientCancellationDate { get; set; }
		[Column()]
		public string ClientAddress1 { get; set; }
		[Column()]
		public string ClientAddress2 { get; set; }
		[Column()]
		public string ClientAddress3 { get; set; }
		[Column()]
		public string ClientAddress4 { get; set; }
		[Column()]
		public string ClientAddressPostCode { get; set; }
		[Column()]
		public string ClientPostal1 { get; set; }
		[Column()]
		public string ClientPostal2 { get; set; }
		[Column()]
		public string ClientPostal3 { get; set; }
		[Column()]
		public string ClientPostalPostCode { get; set; }
		[Column()]
		public int ClientContactTitleID { get; set; }
		[Column()]
		public string ClientContactInitials { get; set; }
		[Column()]
		public string ClientContactSurname { get; set; }
		[Column()]
		public string ClientContactCell { get; set; }
		[Column()]
		public string ClientContactPhone { get; set; }
		[Column()]
		public string ClientContactPhoneCode { get; set; }
		[Column()]
		public string ClientContactFax { get; set; }
		[Column()]
		public string ClientContactEMail { get; set; }
		[Column()]
		public int ClientNationalityID { get; set; }
		[Column()]
		public string ClientBankAccount { get; set; }
		[Column()]
		public string ClientBankAccountType { get; set; }
		[Column()]
		public string ClientBankName { get; set; }
		[Column()]
		public string ClientBankBranchCode { get; set; }
		[Column()] 
        public string ClientAllias { get; set; }

        [Column()] 
        public string MiscellaneousAccount { get; set; }
        [Column()]
		public int UserModified { get; set; }
		[Column()]
		public DateTime Lastmodified { get; set; }
	}
}