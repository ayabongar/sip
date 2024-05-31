using System;
using System.Data.Linq.Mapping;
using System.Collections.Generic;

namespace DIPS.Models
{
    [Table(Name = "Client")]
    public class ApprovedClaims : Sars.Systems.Data.DataAccessObject
    {
        public ApprovedClaims()
        {
        }
        public ApprovedClaims(string procedure, Dictionary<string, object> parameters) : base(procedure, parameters)
        {
        }
        [Column()]
        public int ClientID { get; set; }

        [Column()]
        public int ClaimGroupID { get; set; }
        [Column()] 
        public string ClientName { get; set; }
        [Column()] 
        public string RequestOperation { get; set; }
        [Column()] 
        public string InvoiceType { get; set; }
        [Column()] 
        public string BillingSource { get; set; }
        [Column()] 
        public string BillingReferenceNo { get; set; }
        [Column()]
        public string ReferenceNo { get; set; }
        [Column()] 
        public string PaymentMethod { get; set; }
        [Column()] 
        public string PRN { get; set; }
        [Column()] 
        public double Value { get; set; }
        [Column()] 
        public string LimitOverride { get; set; }
        [Column()] 
        public List<Invoice> Invoices { get; set; }
        [Column()] 
        public string Code { get; set; }
        [Column()] 
        public string BillingDocumentNumber { get; set; }
        [Column()] 
        public string FinancialDocNumber { get; set; }
        [Column()]
        public string PostPRN { get; set; }
        [Column()]
        public int TotalAmtt { get; set; }
        }

        public class Invoice : Sars.Systems.Data.DataAccessObject
       {
        public Invoice()
        {
        }
        public Invoice(string procedure, Dictionary<string, object> parameters) : base(procedure, parameters)
        {
        }
        [Column()] 
        public string TaxType { get; set; }
        [Column()] 
        public string FinancialAccountNo { get; set; }
        [Column()] 
        public string ReferenceNo { get; set; }
        [Column()] 
        public double PayableAmount { get; set; }
        [Column()] 
        public string RevenueCode { get; set; }
        [Column()] 
        public string PaymentMethod { get; set; }
        [Column()] 
        public string LiabilityDate { get; set; }
        [Column()] 
        public string DeferalDueDate { get; set; }
        [Column()]
        public string RefundRequestDate { get; set; }
        [Column()]
        public string VATRegNo { get; set; }
        [Column()]
        public string PortOfEntry { get; set; }
        }

        public class Root
        {
            public ApprovedClaims ApprovedClaims { get; set; }
        }

    }
