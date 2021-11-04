import { handleResponse, handleError } from "./apiUtils";

const baseUrl = "api/ingredientcategories/";

export function getIngredientCategories() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}
