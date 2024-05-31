using System;
using System.Collections.Generic;

using System.Data.Linq.Mapping;
using Sars.Systems.Data;

namespace DIPS.Models
{
    [Table(Name = "UploadedFiles")]
    public partial class UploadedFiles : Sars.Systems.Data.DataAccessObject
    {
        public UploadedFiles()
        {
        }
        public UploadedFiles(string procedure, Dictionary<string, object> parameters)
            : base(procedure, parameters)
        {
        }

        [Column()]
        public int Id { get; set; }
        [Column()]
        public System.Nullable<int> ClientID { get; set; }
        [Column()]
        public System.Nullable<int> VehicleId { get; set; }

        [Column()]
        public System.Nullable<int> ClaimId { get; set; }
        [Column()]
        public System.Nullable<int> OwnerId { get; set; }
        [Column()]
        public System.Nullable<int> InvoiceId { get; set; }
        [Column()]
        public string FileName { get; set; }
        [Column()]
        public string ObjectId { get; set; }
       
        [Column()]
        public string FilePath { get; set; }
        [Column()]
        public string content { get; set; }

        [Column()]
        public string FileType { get; set; }
       
        [Column()]       
        public string FileAsBase64 { get; set; }
       
        [Column()]
        public byte[] FileAsByteArray { get; set; }

        [Column()]
        public string FileSize { get; set; }
        [Column()]
        public string Message { get; set; }
        [Column()]
        public string Comment { get; set; }
        [Column()]
        public string Owner { get; set; }
        [Column()]
        public string CreationDate { get; set; }
        [Column()]
        public string UploadedBy { get; set; }
        [Column()]
        public System.Nullable<DateTime> Timestamp { get; set; }
    }
}