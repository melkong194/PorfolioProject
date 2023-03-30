using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IPorfRepo
    {
        Task<Porf> GetPorfByIdAsync(int id);

        Task<IReadOnlyList<Porf>> GetPorfsAsync();
        Task<IReadOnlyList<PorfType>> GetPorfTypesAsync();
        Task Add(Porf p);
        Task Update(Porf p);
        Task Remove(Porf p);
    }
}
