import WeightedIngredient from "./WeightedIngredient";

export default class Recipe {
    id: string = "";
    name: string = "";
    instructions: string = "";
    basePortions: number = 0;
    weightedIngredients: WeightedIngredient[] = [];
}
