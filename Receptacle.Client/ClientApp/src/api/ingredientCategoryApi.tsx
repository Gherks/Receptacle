import { handleResponse, handleError } from "./apiUtils";

const baseUrl = "api/ingredientcategories/";

export function getIngredientCategories(): Promise<any> {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}
