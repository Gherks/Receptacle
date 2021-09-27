﻿using Receptacle.Server.Entities.Base;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Receptacle.Server.Repositories.Interfaces
{
    public interface IAsyncRepository<Type> where Type : BaseEntity
    {
        Task<Type> GetByIdAsync(Guid id);
        Task<IReadOnlyList<Type>> ListAllAsync();
        Task<Type> AddAsync(Type entity);
        Task<IEnumerable<Type>> AddManyAsync(IEnumerable<Type> entities);
        Task<Type> UpdateAsync(Type entity);
        Task UpdateManyAsync(IEnumerable<Type> entities);
        Task DeleteAsync(Type entity);
        Task DeleteManyAsync(IEnumerable<Type> entities);
    }
}
