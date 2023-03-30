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
    public class PorfRepo : IPorfRepo
    {
        private readonly StoreContext _context;

        public PorfRepo(StoreContext context)
        {
            _context = context;
        }
        public async Task<Porf> GetPorfByIdAsync(int id)
        {
            //var Porfs = _context.Porfs
            //    .Where(x => x.Id == id).Include(x => x.Id).ToListAsync();

            return await _context.Porfs
                .Include(p => p.PorfType)
                .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<IReadOnlyList<Porf>> GetPorfsAsync()
        {
            //var typeId = 1;

            //var Porfs = _context.Porfs
            //    .Where(x => x.PorfTypeId == typeId).Include(x => x.PorfType).ToListAsync();

            return await _context.Porfs
                .Include(p => p.PorfType)
                .ToListAsync();
        }

        public async Task<IReadOnlyList<PorfType>> GetPorfTypesAsync()
        {
            return await _context.PorfTypes.ToListAsync();
        }

        public async Task Update(Porf porf)
        {

            _context.Set<Porf>().Update(porf);
            await _context.SaveChangesAsync();
        }

        public async Task Add(Porf porf)
        {
            await _context.Set<Porf>().AddAsync(porf);
            await _context.SaveChangesAsync();
            
        }

        public async Task Remove(Porf porf)
        {
            _context.Set<Porf>().Remove(porf);
            await _context.SaveChangesAsync();
            

        }
    }
}
