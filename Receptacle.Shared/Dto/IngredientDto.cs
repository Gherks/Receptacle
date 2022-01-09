using Receptacle.Shared.Dto.Base;
using System;

namespace Receptacle.Shared.Dto
{
    public class IngredientDto : DtoBase
    {
        public Guid IngredientCategoryId { get; set; } = Guid.Empty;
        public string Name { get; set; } = "";
        public decimal Fat { get; set; } = 0;
        public decimal Carbohydrates { get; set; } = 0;
        public decimal Protein { get; set; } = 0;
        public decimal Calories { get; set; } = 0;
    }
}
