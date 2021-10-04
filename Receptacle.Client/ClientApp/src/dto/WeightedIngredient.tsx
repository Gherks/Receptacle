import Ingredient from "./Ingredient";

export default class WeightedIngredient {
    id: string = "";
    ingredient: Ingredient | null = null;
    grams: number = 0;
}
