using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class PostTypeRepo : IPostTypeRepo
    {
        private readonly StoreContext _context;

        public PostTypeRepo(StoreContext context)
        {
            _context = context;
        }


        public async Task<PostType> GetPostTypeByIdAsync(int id)
        {
            return await _context.PostTypes.FindAsync(id);
        }

        public async Task<IReadOnlyList<PostType>> GetPostTypesAsync()
        {
            return await _context.PostTypes.ToListAsync();
        }

        public async Task Update(PostType post)
        {

             _context.Set<PostType>().Update(post);
            await _context.SaveChangesAsync();
        }

        public async Task Add(PostType post)
        {
            await _context.Set<PostType>().AddAsync(post);
            await _context.SaveChangesAsync();
        }

        public async Task Remove(PostType post)
        {
            _context.Set<PostType>().Remove(post);
            await _context.SaveChangesAsync();
        }
    }
}
