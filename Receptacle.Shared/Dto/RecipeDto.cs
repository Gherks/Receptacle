﻿using Receptacle.Shared.Dto.Base;
using System.Collections.Generic;

namespace Receptacle.Shared.Dto
{
    public class RecipeDto : DtoBase
    {
        public string Name { get; set; } = "";
        public string Instructions { get; set; } = "";
        public int BasePortions { get; set; } = 1;
        public List<WeightedIngredientDto> WeightedIngredients { get; set; } = new();
    }
}
