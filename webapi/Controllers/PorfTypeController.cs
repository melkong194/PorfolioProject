using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PorfTypeController : ControllerBase
    {
        private readonly IPorfTypeRepo _repo;

        public PorfTypeController(IPorfTypeRepo repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<ActionResult<List<PorfType>>> GetPorfTypes()
        {
            var PorfTypes = await _repo.GetPorfTypesAsync();
            return Ok(PorfTypes);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<PorfType>> GetPorfType(int id)
        {
            return await _repo.GetPorfTypeByIdAsync(id);
        }

        [HttpPost("Add")]
        public async Task Add(string name)
        {
            PorfType p = new PorfType
            {
                Name = name
            };
            await _repo.Add(p);
        }

        [HttpDelete("Delete")]
        public async Task Remove(int id)
        {
            PorfType p = await _repo.GetPorfTypeByIdAsync(id);

            await _repo.Remove(p);
        }

        [HttpPut("Update")]
        public async Task Update(int id, string name)
        {

            PorfType p = new PorfType
            {
                Id = id,
                Name = name
            };
            await _repo.Update(p);
        }
    }
}
