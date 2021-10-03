namespace Receptacle.Shared.Dto
{
    public class WeightedIngredientDto : DtoBase
    {
        public IngredientDto Ingredient { get; set; } = null;
        public decimal Grams { get; set; } = 0;
    }
}
