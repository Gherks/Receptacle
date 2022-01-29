import Ingredient from '../../../dto/Ingredient';
import IngredientCategory from '../../../dto/IngredientCategory';
import { emptyGuid } from '../../../utility/Guid';

export class IngredientForm {
    name: string = "";
    fat: number = 0;
    carbohydrates: number = 0;
    protein: number = 0;
    calories: number = 0;
    selectedCategoryId: string = emptyGuid;
}

export class IngredientErrorForm {
    name: string = "";
    fat: string = "";
    carbohydrates: string = "";
    protein: string = "";
    calories: string = "";
    category: string = "";
}
