using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using SubscriptionDashboard.Data;
using SubscriptionDashboard.Entities;

namespace SubscriptionDashboard.Controllers
{
    [Route("api/contracts")]
    [ApiController]
    public class ContractsController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IMemoryCache _cache;

        public ContractsController(DataContext context, IMemoryCache cache)
        {
            _context = context;
            _cache = cache;
        }

        [HttpGet("{contractId}")]
        public async Task<IActionResult> GetContract(int contractId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (_cache.TryGetValue($"Contract:{contractId}", out Contract contract))
            {
                return Ok(contract);
            }

            contract = await _context.Contracts.FirstOrDefaultAsync(c => c.SubscriptionId == contractId);

            if (contract == null)
            {
                return NotFound();
            }

            _cache.Set($"Contract:{contractId}", contract, TimeSpan.FromMinutes(5));

            return Ok(contract);
        }
    }

}
