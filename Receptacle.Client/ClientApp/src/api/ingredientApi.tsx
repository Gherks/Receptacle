import { handleResponse, handleError } from "./apiUtils";
import Ingredient from "./../dto/Ingredient";

const baseUrl = "api/ingredients/";

export function getIngredients() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}

//export function getCourseBySlug(slug) {
//    return fetch(baseUrl + "?slug=" + slug)
//        .then(response => {
//            if (!response.ok) throw new Error("Network response was not ok.");
//            return response.json().then(courses => {
//                if (courses.length !== 1) throw new Error("Course not found: " + slug);
//                return courses[0]; // should only find one course for a given slug, so return it.
//            });
//        })
//        .catch(handleError);
//}

export function saveIngredient(ingredient: Ingredient) {
    const { id, ...idlessIngredient } = ingredient;
    const url: string = baseUrl + (ingredient.id || "");
    const requestOptions = {
        method: ingredient.id ? "PUT" : "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...((id) ? ingredient : idlessIngredient) })
    };
    return fetch(url, requestOptions)
        .then(handleResponse)
        .catch(handleError);
}

export function deleteIngredient(ingredientId: string) {
    return fetch(baseUrl + ingredientId, { method: "DELETE" })
        .then(handleResponse)
        .catch(handleError);
}
