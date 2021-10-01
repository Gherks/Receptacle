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
    return fetch(baseUrl + (ingredient.id || ""), {
        method: ingredient.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            ...ingredient//,
            // Parse authorId to a number (in case it was sent as a string).
            //authorId: parseInt(ingredient.authorId, 10)
        })
    })
        .then(handleResponse)
        .catch(handleError);
}

export function deleteIngredient(ingredientId: string) {
    return fetch(baseUrl + ingredientId, { method: "DELETE" })
        .then(handleResponse)
        .catch(handleError);
}
