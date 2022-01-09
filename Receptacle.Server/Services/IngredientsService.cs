using AutoMapper;
using Receptacle.Server.Entities;
using Receptacle.Server.Repositories.Interfaces;
using Receptacle.Server.Services.Interfaces;
using Receptacle.Shared.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Receptacle.Server.Services
{
    public class IngredientsService : IIngredientsService
    {
        private readonly IIngredientsRepository _repository;
        private readonly IMapper _mapper;

        public IngredientsService(IIngredientsRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<IngredientDto> GetByIdAsync(Guid id)
        {
            Ingredient ingredient = await _repository.GetByIdAsync(id);

            if (ingredient != null)
            {
                return _mapper.Map<IngredientDto>(ingredient);
            }

            return null;
        }

        public async Task<IReadOnlyList<IngredientDto>> GetAllAsync()
        {
            IReadOnlyList<Ingredient> ingredients = await _repository.ListAllAsync();

            return entities.Select(ingredient => _mapper.Map<IngredientDto>(ingredient)).ToArray();
        }

        public async Task<IngredientDto> SaveAsync(IngredientDto ingredientDto)
        {
            Ingredient ingredient = _mapper.Map<Ingredient>(ingredientDto);

            if (ingredient.Id == Guid.Empty)
            {
                ingredient = await _repository.AddAsync(ingredient);
            }
            else
            {
                await _repository.UpdateAsync(ingredient);
            }

            return _mapper.Map<IngredientDto>(ingredient);
        }

        public async Task<bool> DeleteAsync(Guid id)
        {
            Ingredient ingredient = await _repository.GetByIdAsync(id);

            if (ingredient != null)
            {
                return await _repository.DeleteAsync(ingredient);
            }

            return false;
        }
    }
}