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
    public class PorfTypeRepo : IPorfTypeRepo
    {
        private readonly StoreContext _context;

        public PorfTypeRepo(StoreContext context)
        {
            _context = context;
        }


        public async Task<PorfType> GetPorfTypeByIdAsync(int id)
        {
            return await _context.PorfTypes.FindAsync(id);
        }

        public async Task<IReadOnlyList<PorfType>> GetPorfTypesAsync()
        {
            return await _context.PorfTypes.ToListAsync();
        }

        public async Task Update(PorfType porf)
        {

            _context.Set<PorfType>().Update(porf);
            await _context.SaveChangesAsync();
        }

        public async Task Add(PorfType porf)
        {
            await _context.Set<PorfType>().AddAsync(porf);
            await _context.SaveChangesAsync();
        }

        public async Task Remove(PorfType porf)
        {
            _context.Set<PorfType>().Remove(porf);
            await _context.SaveChangesAsync();
        }
    }
}
