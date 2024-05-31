using Sars.Systems.Data;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace DIPS.Db
{
    public class Conn
    {
        public static string DIPSConnectionString
        {
            get
            {
                return ConfigurationManager.ConnectionStrings["dips"].ToString();
            }
        }
        public static string ConnectionString
        {
            get
            {
                return ConfigurationManager.ConnectionStrings["Amakhwezi"].ToString();
            }
        }
        public static DBConnection Connection
        {
            get
            {
                return new DBConnection(DIPSConnectionString);
            }
        }
        public static DBConnection TransactionConnection
        {
            get
            {
                return new DBConnection(ConnectionString, true, System.Data.IsolationLevel.ReadUncommitted);
            }
        }
    }
}
