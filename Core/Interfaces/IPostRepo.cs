using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IPostRepo
    {
        Task<Post> GetPostByIdAsync(int id);
        
        Task<IReadOnlyList<Post>> GetPostsAsync();
        Task<IReadOnlyList<PostType>> GetPostTypesAsync();

        Task Add(Post p);
        Task Update(Post p);
        Task Remove(Post p);
    }
}
