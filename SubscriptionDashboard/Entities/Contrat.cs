namespace SubscriptionDashboard.Entities
{
    public class Contrat
    {
        public int SubscriptionId { get; set; }
        public string SubscriptionName { get; set; }
        public SubscriptionType SubscriptionType { get; set; }
        public List<Package> Packages { get; set; }
    }
    public enum SubscriptionType
    {
        Personal,
        Business,
        Enterprise
    }
}
