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
    public class PostRepo : IPostRepo
    {
        private readonly StoreContext _context;

        public PostRepo(StoreContext context)
        {
            _context = context;
        }
        public async Task<Post> GetPostByIdAsync(int id)
        {
            //var posts = _context.Posts
            //    .Where(x => x.Id == id).Include(x => x.Id).ToListAsync();

            return await _context.Posts
                .Include(p => p.PostType)
                .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<IReadOnlyList<Post>> GetPostsAsync()
        {
            //var typeId = 1;

            //var posts = _context.Posts
            //    .Where(x => x.PostTypeId == typeId).Include(x => x.PostType).ToListAsync();

            return await _context.Posts
                .Include(p => p.PostType)
                .ToListAsync();
        }

        public async Task<IReadOnlyList<PostType>> GetPostTypesAsync()
        {
            return await _context.PostTypes.ToListAsync();
        }

        public async Task Update(Post post)
        {

            _context.Set<Post>().Update(post);
            await _context.SaveChangesAsync();
        }

        public async Task Add(Post post)
        {
            await _context.Set<Post>().AddAsync(post);
            await _context.SaveChangesAsync();
        }

        public async Task Remove(Post post)
        {
            _context.Set<Post>().Remove(post);
            await _context.SaveChangesAsync();
        }

    }
}
