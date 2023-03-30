using Core.Entities;
using Core.Specification;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IGenericRepo<T> where T : BaseEntity
    {
        Task<T> GetByIdAsync(int id);
        Task<IReadOnlyList<T>> ListAllAsync();
        Task<T> GetEntityWithSpec(ISpecification<T> spec);
        Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec);
        Task<int> CountAsync(ISpecification<T> spec);
        Task SaveChangesAsync();
        Task UpdateAsync(T spec);
        Task AddAsync(T spec);
        Task Remove(T spec);

        //Task<T> Create<T>(T objectForDb) where T : class;
        //Task<T> Read<T>(Int64 entityId) where T : class;
        //Task<List<T>> ReadAll<T>() where T : class;
        //Task<T> Update<T>(T objectToUpdate, Int64 entityId) where T : class;
        //Task<bool> Delete<T>(Int64 entityId) where T : class;


    }
}
