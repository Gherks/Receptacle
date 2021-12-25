import React, { useState, useEffect, SyntheticEvent, MouseEvent } from "react";
import IngredientsForm from "./IngredientsForm";
import IngredientsTable from "./IngredientsTable";
import Ingredient from "../../dto/Ingredient";
import IngredientCategory from "../../dto/IngredientCategory";
import IngredientErrorForm from "./IngredientErrorForm";
import { getIngredients, saveIngredient } from "../../api/ingredientApi";
import { getIngredientCategories } from "../../api/ingredientCategoryApi";
import { toast } from "react-toastify";

export default function IngredientsPage() {
    const [ingredientForm, setIngredientForm] = useState<Ingredient>(new Ingredient());
    const [ingredientCollections, setIngredientCollections] = useState<Ingredient[][]>([]);
    const [ingredientCategories, setIngredientCategories] = useState<IngredientCategory[]>([]);
    const [errors, setErrors] = useState<IngredientErrorForm>(new IngredientErrorForm());
    const [toggleButtonText, setToggleButtonText] = useState<string>("Show ingredient form");

    useEffect(() => {
        const _ingredientCollections: Ingredient[][] = [];
        getIngredientCategories().then(_ingredientCategories => {
            setIngredientCategories(_ingredientCategories);
            _ingredientCategories.map(() => {
                _ingredientCollections.push([]);
            })
        });
        getIngredients().then(_ingredients => {
            _ingredients.map((ingredient: Ingredient) => {
                if (ingredient.category) {
                    const categoryIndex = ingredient.category.sortOrder;
                    _ingredientCollections[categoryIndex].push(ingredient);
                }
            })
            setIngredientCollections(_ingredientCollections);
        });
    }, []);

    function handleChange(event: SyntheticEvent) {
        const target = event.target as HTMLInputElement;
        setIngredientForm({ ...ingredientForm, [target.name]: target.value })
    }

    function handleCategorySelectChange(event: SyntheticEvent) {
        const target = event.target as HTMLSelectElement;
        const category = ingredientCategories.find(category => category.id === target.value);
        if (category) {
            setIngredientForm({ ...ingredientForm, "category": category })
        }
    }

    function handleSubmit(event: SyntheticEvent) {
        event.preventDefault();
        if (formIsInvalid()) {
            return;
        }
        saveIngredient(ingredientForm)
            .then((savedIngredient: Ingredient) => {
                if (savedIngredient && savedIngredient.category) {
                    const index = savedIngredient.category.sortOrder;
                    const newIngredientsCollection: Ingredient[][] = ingredientCollections.slice();
                    newIngredientsCollection[index].push(savedIngredient);
                    setIngredientCollections(newIngredientsCollection);
                    setIngredientForm(new Ingredient());
                    toast.success(savedIngredient.name + " saved to ingredient table!");
                } else {
                    toast.error("Unable to properly save ingredient to table");
                }
            });
    }

    function formIsInvalid() {
        let _errors: any = {};

        if (!ingredientForm.name) _errors.name = "Name is required";

        if (!ingredientForm.fat) _errors.fat = "Must provide a value for fat";
        else if (ingredientForm.fat < 0) _errors.fat = "Fat cannot be less than 0";

        if (!ingredientForm.fat) _errors.fat = "Must provide a value for fat";
        else if (ingredientForm.fat < 0) _errors.fat = "Fat cannot be less than 0";

        if (!ingredientForm.carbohydrates) _errors.carbohydrates = "Must provide a value for carbohydrates";
        else if (ingredientForm.carbohydrates < 0) _errors.carbohydrates = "Carbohydrates cannot be less than 0";

        if (!ingredientForm.protein) _errors.protein = "Must provide a value for protein";
        else if (ingredientForm.protein < 0) _errors.protein = "Protein cannot be less than 0";

        if (!ingredientForm.calories) _errors.calories = "Must provide a value for calories";
        else if (ingredientForm.calories < 0) _errors.calories = "Calories cannot be less than 0";

        setErrors(_errors);

        return Object.keys(_errors).length > 0;
    }

    function handleCollapseIngredientFormClick(event: MouseEvent<HTMLElement>) {
        if (event.currentTarget.innerText === "Show ingredient form") {
            setToggleButtonText("Hide ingredient form");
        } else {
            setToggleButtonText("Show ingredient form");
        }
    }

    return (
        <>
            <h1>Ingredients</h1>
            <div className="card card-body mb-2">
                <div>
                    <button className="btn btn-primary" type="button" onClick={handleCollapseIngredientFormClick} data-bs-toggle="collapse" data-bs-target="#collapseIngredientForm" aria-expanded="false" aria-controls="collapseIngredientForm">
                        {toggleButtonText}
                    </button>
                </div>
                <div className="collapse mt-3" id="collapseIngredientForm">
                    <IngredientsForm ingredientForm={ingredientForm} ingredientCategories={ingredientCategories} onChange={handleChange} onCategorySelectChange={handleCategorySelectChange} onSubmit={handleSubmit} errors={errors} />
                </div>
            </div>
            {ingredientCollections.map((ingredientCollection, index) => {
                return (
                    <div className="card card-body mb-2" key={ingredientCategories[index].id}>
                        <IngredientsTable categoryName={ingredientCategories[index].name} ingredients={ingredientCollection} />
                    </div>
                )
            })}
        </>
    );
};
