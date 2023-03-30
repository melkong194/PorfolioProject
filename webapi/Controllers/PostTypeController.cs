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
    public class PostTypeController : ControllerBase
    {
        private readonly IPostTypeRepo _repo;

        public PostTypeController(IPostTypeRepo repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<ActionResult<List<PostType>>> GetPostTypes()
        {
            var PostTypes = await _repo.GetPostTypesAsync();
            return Ok(PostTypes);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<PostType>> GetPostType(int id)
        {
            return await _repo.GetPostTypeByIdAsync(id);
        }

        [HttpPost("Add")]
        public async Task Add(string name)
        {
            PostType p = new PostType
            {
                Name = name
            };
            await _repo.Add(p);
        }

        [HttpDelete("Delete")]
        public async Task Remove(int id)
        {
            PostType p = await _repo.GetPostTypeByIdAsync(id);

            await _repo.Remove(p);
        }

        [HttpPut("Update")]
        public async Task Update(int id, string name)
        {

            PostType p = new PostType
            {
                Id = id,
                Name = name
            };
            await _repo.Update(p);
        }
    }
}
