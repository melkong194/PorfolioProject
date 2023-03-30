using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IPostTypeRepo
    {
        Task<PostType> GetPostTypeByIdAsync(int id);
        Task<IReadOnlyList<PostType>> GetPostTypesAsync();
        Task Add(PostType p);
        Task Update(PostType p);
        Task Remove(PostType p);
    }
}
