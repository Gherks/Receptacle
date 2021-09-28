﻿using Receptacle.Shared.Dto;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Receptacle.Server.Services.Interfaces
{
    public interface IIngredientsService
    {
        Task<IngredientDto> GetByIdAsync(Guid id);
        Task<IReadOnlyList<IngredientDto>> GetAllAsync();
        Task DeleteAsync(Guid id);
    }
}
