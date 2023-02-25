namespace SubscriptionDashboard.Entities
{
    public class Package
    {
        public PackageType PackageType { get; set; }
        public string PackageName { get; set; }
        public int TotalAmount { get; set; }
        public int UsedAmount { get; set; }
    }
    public enum PackageType
    {
        Basic,
        Premium,
        Ultimate
    }
}
