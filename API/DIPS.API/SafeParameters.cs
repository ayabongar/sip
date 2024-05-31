using System;


namespace DIPS
{
    public class SafeParameters
    {

        #region  public short? StringToShortSafeParameter(string p)
        public static short? StringToShortSafeParameter(string p)
        {
            try
            {
                short? emptyshort = null;
                if (!string.IsNullOrEmpty(p))
                {
                    if (char.IsNumber(p, 0))
                    {
                        emptyshort = short.Parse(p);
                    }
                }
                return emptyshort;
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion

        #region public string ShortToStringSafeParameter(short? p)
        public static string ShortToStringSafeParameter(short? p)
        {
            string nullableString = string.Empty;
            if (p.HasValue)
            {
                nullableString = p.ToString();
            }
            return nullableString;
        }
        #endregion

        #region  public DateTime? DateTimeSafeParameter(string p)
        public static DateTime? StringToDateTimeSafeParameter(string p)
        {
            try
            {
                DateTime emptyDate;
                DateTime? nullableDate = null;
                if (!string.IsNullOrEmpty(p))
                {
                    bool isDate = DateTime.TryParse(p, out emptyDate);
                    if (isDate)
                    {
                        nullableDate = DateTime.Parse(p);
                        if (nullableDate < Convert.ToDateTime("01/01/1753"))
                        {
                            nullableDate = null;
                        }
                       
                    }
                }
                return nullableDate;
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion

        #region  public DateTime DateTimeSafeParameter(string p)
        public static DateTime StringToDateTimeSafeParameterNotNull(string p)
        {
            try
            {
                DateTime emptyDate;
                DateTime nullableDate = DateTime.MinValue;
                if (!string.IsNullOrEmpty(p))
                {
                    bool isDate = DateTime.TryParse(p, out emptyDate);
                    if (isDate)
                    {
                        nullableDate = DateTime.Parse(p);
                    }
                    nullableDate = DateTime.Parse(p);
                }
                return nullableDate;
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion

        #region public string ShortToStringSafeParameter(short? p)
        public static string TimeSpanToStringSafeParameter(TimeSpan? p)
        {
            string nullableString = string.Empty;
            if (p.HasValue)
            {
                nullableString = p.Value.Hours.ToString().PadLeft(2, '0') + ":" + p.Value.Minutes.ToString().PadLeft(2, '0');
            }
            return nullableString;
        }
        #endregion

        #region   public TimeSpan? StringToTimeSafeParameter(string p)
        public static TimeSpan? StringToTimeSafeParameter(string p)
        {
            try
            {
                TimeSpan emptyTime;
                TimeSpan? nullableTime = null;
                if (!string.IsNullOrEmpty(p))
                {
                    bool isDate = TimeSpan.TryParse(p, out emptyTime);
                    if (isDate)
                    {
                        nullableTime = TimeSpan.Parse(p);
                    }
                    nullableTime = TimeSpan.Parse(p);
                }
                return nullableTime;
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion

        #region   public string DateTimeToStringSafeParameter(DateTime? p)
        public static string DateTimeToStringSafeParameter(DateTime? p)
        {
            try
            {
                string nullableString = null;
                if (p.HasValue)
                {
                    nullableString = Convert.ToDateTime(p.ToString()).ToString("dd/MM/yyyy");
                }
                return nullableString;
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion
        #region   public string DateTimeToStringSafeParameterYYYYMMdd(DateTime? p)
        public static string DateTimeToStringSafeParameterYYYYMMdd(DateTime? p)
        {
            try
            {
                string nullableString = null;
                if (p.HasValue)
                {
                    nullableString = Convert.ToDateTime(p.ToString()).ToString("yyyy-MM-dd");
                }
                return nullableString;
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion

        #region   public string DateTimeToStringSafeParameter_ddMMMyyyy(DateTime? p)
        public static string DateTimeToStringSafeParameter_ddMMMyyyy(DateTime? p)
        {
            try
            {
                string nullableString = null;
                if (p.HasValue)
                {
                    nullableString = Convert.ToDateTime(p.ToString()).ToString("dd/MMM/yyyy");
                }
                return nullableString;
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion

        #region   public string DateTimeToStringSafeParameter(DateTime? p)
        public static string DateTimeToStringYearSafeParameter(DateTime? p)
        {
            try
            {
                string nullableString = null;
                if (p.HasValue)
                {
                    nullableString = Convert.ToDateTime(p.ToString()).ToString("yyyy");
                }
                return nullableString;
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion

        #region   public string DateTimeToStringMonthYearSafeParameter(DateTime? p)
        public static string DateTimeToStringMonthYearSafeParameter(DateTime? p)
        {
            try
            {
                string nullableString = null;
                if (p.HasValue)
                {
                    nullableString = Convert.ToDateTime(p.ToString()).ToString("MMM/yyyy");
                }
                return nullableString;
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion

        #region   public int StringToIntegerSafeParameter(string p)
        public static int? StringToIntegerSafeParameter(string p)
        {
            try
            {
                int? nullableInt = null;
                if (!string.IsNullOrEmpty(p))
                {
                    if (char.IsNumber(p, 0))
                    {
                        nullableInt = int.Parse(p);
                    }
                }
                return nullableInt;
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion

        #region public IntegerToStringSafeParameter IntegerToStringSafeParameter(string p)
        public static string IntegerToStringSafeParameter(int? p)
        {
            try
            {
                string nullableString = string.Empty;
                if ((p.HasValue))
                {

                    nullableString = p.ToString();

                }
                return nullableString;
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion

        #region  public Double StringToDoubleSafeParameter(string p)
        public static Double StringToDoubleSafeParameter(string p)
        {
            try
            {
                double nullableDouble = 0;
                if (!string.IsNullOrEmpty(p))
                {
                    if (char.IsNumber(p, 0))
                    {
                        nullableDouble = Double.Parse(p);
                    }
                }
                return nullableDouble;
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion

        #region  public decimal StringToDecimalSafeParameter(string p)
        public static decimal StringToDecimalSafeParameter(string p)
        {
            try
            {
                decimal nullableDouble = 0;
                if (!string.IsNullOrEmpty(p))
                {
                    if (char.IsNumber(p, 0))
                    {
                        nullableDouble = decimal.Parse(p);
                    }
                }
                return nullableDouble;
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion

        #region  public string DoubleToStringSafeParameter(double p)
        public static string DoubleToStringSafeParameter(double? p)
        {
            try
            {
                string nullableString = string.Empty;

                if (p != null)
                {
                    nullableString = p.ToString();
                }

                return nullableString;
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion

        #region  public string DecimalToStringSafeParameter(double p)
        public static string DecimalToStringSafeParameter(decimal? p)
        {
            try
            {
                string nullableString = string.Empty;

                if (p != null)
                {
                    nullableString = p.ToString();
                }

                return nullableString;
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion
    }
}