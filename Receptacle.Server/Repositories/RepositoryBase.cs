using Receptacle.Server.Context;
using Receptacle.Server.Entities.Base;
using Receptacle.Server.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Receptacle.Server.Repositories
{
    public class RepositoryBase<Type> : IAsyncRepository<Type> where Type : BaseEntity
    {
        protected internal ReceptacleContext _dbContext;

        public RepositoryBase(ReceptacleContext dbContext)
        {
            _dbContext = dbContext;
        }

        public virtual async Task<Type> GetByIdAsync(Guid id)
        {
            return await _dbContext.Set<Type>().FindAsync(id);
        }

        public async Task<IReadOnlyList<Type>> ListAllAsync()
        {
            return await _dbContext.Set<Type>().ToListAsync();
        }

        public async Task<Type> AddAsync(Type entity)
        {
            _dbContext.Set<Type>().Add(entity);

            try
            {
                await _dbContext.SaveChangesAsync();
                await _dbContext.Entry(entity).ReloadAsync();
            }
            catch (Exception exception)
            {
                Console.WriteLine(exception.Message);
            }

            return entity;
        }

        public async Task<IEnumerable<Type>> AddManyAsync(IEnumerable<Type> entities)
        {
            await _dbContext.Set<Type>().AddRangeAsync(entities);
            await _dbContext.SaveChangesAsync();

            foreach (var entity in entities)
            {
                await _dbContext.Entry(entity).ReloadAsync();
            }

            return entities;
        }

        public virtual async Task<Type> UpdateAsync(Type entity)
        {
            _dbContext.Entry(entity).State = EntityState.Modified;

            await _dbContext.SaveChangesAsync();
            await _dbContext.Entry(entity).ReloadAsync();

            return entity;
        }

        public async Task UpdateManyAsync(IEnumerable<Type> entities)
        {
            var entityArray = entities.ToArray();

            if (!entityArray.Any())
            {
                return;
            }

            foreach (Type entity in entityArray)
            {
                _dbContext.Entry(entity).State = EntityState.Modified;
            }

            await _dbContext.SaveChangesAsync();
        }

        public async Task<bool> DeleteAsync(Type entity)
        {
            _dbContext.Set<Type>().Remove(entity);
            return await _dbContext.SaveChangesAsync() == 1;
        }

        public async Task<bool> DeleteManyAsync(IEnumerable<Type> entities)
        {
            _dbContext.Set<Type>().RemoveRange(entities);
            return await _dbContext.SaveChangesAsync() == entities.Count();
        }
    }
}
