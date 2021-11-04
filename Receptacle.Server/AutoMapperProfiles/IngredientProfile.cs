using AutoMapper;
using Receptacle.Server.Entities;
using Receptacle.Shared.Dto;

namespace Receptacle.Server.AutoMapperProfiles
{
    public class IngredientProfile : Profile
    {
        public IngredientProfile()
        {
            CreateMap<Ingredient, IngredientDto>()
                .ForMember(ingredientDto => ingredientDto.Category,
                    options => options.MapFrom(ingredient => ingredient.IngredientCategory))
                .ReverseMap();
        }
    }
}
