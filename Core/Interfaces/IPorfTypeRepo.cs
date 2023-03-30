using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IPorfTypeRepo
    {
        Task<PorfType> GetPorfTypeByIdAsync(int id);
        Task<IReadOnlyList<PorfType>> GetPorfTypesAsync();
        Task Add(PorfType p);
        Task Update(PorfType p);
        Task Remove(PorfType p);
    }
}
