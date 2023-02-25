using System.Diagnostics.Contracts;
using System.Net;

namespace SubscriptionDashboard.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Address Address { get; set; }
        public List<Contract> Contrats { get; set; }
    }
}
