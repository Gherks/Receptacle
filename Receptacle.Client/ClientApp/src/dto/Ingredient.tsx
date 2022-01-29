import IngredientCategory from "./IngredientCategory";

export default class Ingredient {
    id: string = "";
    category: IngredientCategory | undefined = undefined;
    name: string = "";
    fat: number = 0;
    carbohydrates: number = 0;
    protein: number = 0;
    calories: number = 0;
}
