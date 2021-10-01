export default class Ingredient {
    id: string;
    name: string;
    fat: number;
    carbohydrates: number;
    protein: number;
    calories: number;

    constructor() {
        this.id = "";
        this.name = "";
        this.fat = 0;
        this.carbohydrates = 0;
        this.protein = 0;
        this.calories = 0;
    }
}
