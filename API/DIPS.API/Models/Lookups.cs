using System;
using System.Data.Linq.Mapping;
using System.Collections.Generic;

namespace DIPS.Models
{
	[Table(Name = "Client")]
	public class Lookups : Sars.Systems.Data.DataAccessObject
	{
		public Lookups()
		{
		}

		public Lookups(string procedure, Dictionary<string, object> parameters) : base(procedure, parameters)
		{
		}
		[Column()]
		public int ClientTypeID { get; set; }
		[Column()]
		public string ClientTypeDescription { get; set; }
		[Column()]
		public int UserModified { get; set; }
		[Column()]
		public DateTime Lastmodified { get; set; }
		[Column()]
		public bool Active { get; set; }
	}


	[Table(Name = "Ranks")]
	public class Ranks : Sars.Systems.Data.DataAccessObject
	{
		public Ranks()
		{
		}

		public Ranks(string procedure, Dictionary<string, object> parameters) : base(procedure, parameters)
		{
		}
		[Column()]
		public int RankID { get; set; }
		[Column()]
		public string RankDescription { get; set; }
		[Column()]
		public int UserModified { get; set; }
		[Column()]
		public DateTime Lastmodified { get; set; }
		[Column()]
		public bool Active { get; set; }
	}

	[Table(Name = "Title")]
	public class Title : Sars.Systems.Data.DataAccessObject
	{
		public Title()
		{
		}

		public Title(string procedure, Dictionary<string, object> parameters) : base(procedure, parameters)
		{
		}
		[Column()]
		public int TitleID { get; set; }
		[Column()]
		public string TitleDescription { get; set; }
		[Column()]
		public int UserModified { get; set; }
		[Column()]
		public DateTime Lastmodified { get; set; }
		[Column()]
		public bool Active { get; set; }
	}

	[Table(Name = "Nationality")]
	public class Nationality : Sars.Systems.Data.DataAccessObject
	{
		public Nationality()
		{
		}

		public Nationality(string procedure, Dictionary<string, object> parameters) : base(procedure, parameters)
		{
		}
		[Column()]
		public int NationalityID { get; set; }
		[Column()]
		public string NationalityDescription { get; set; }
		[Column()]
		public int UserModified { get; set; }
		[Column()]
		public DateTime Lastmodified { get; set; }
		[Column()]
		public bool Active { get; set; }
	}

	[Table(Name = "dipRefundRate")]
	public class dipRefundRate : Sars.Systems.Data.DataAccessObject
	{
		public dipRefundRate()
		{
		}

		public dipRefundRate(string procedure, Dictionary<string, object> parameters) : base(procedure, parameters)
		{
		}
		[Column()]
		public int RefundRateID { get; set; }
		[Column()]
		public string RefundTypeDescription { get; set; }
		[Column()]
		public string RefundFuelCode { get; set; }
		[Column()]
		public string RefundExciseCode { get; set; }
		[Column()]
		public float RefundExciseDuty { get; set; }
		[Column()]
		public float RefundFuelLevy { get; set; }
		[Column()]
		public int UserModified { get; set; }
		[Column()]
		public DateTime Lastmodified { get; set; }
		[Column()]
		public DateTime RefundEffectiveDate { get; set; }
		[Column()]
		public bool Active { get; set; }
	}
}