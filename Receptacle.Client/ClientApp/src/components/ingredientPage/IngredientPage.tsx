import React, { useState, useEffect, SyntheticEvent, MouseEvent } from 'react';
import IngredientsForm from './IngredientsForm';
import IngredientsTable from './IngredientsTable';
import Ingredient from '../../dto/Ingredient';
import IngredientErrorForm from './IngredientErrorForm';
import { getIngredients, saveIngredient } from '../../api/ingredientApi';

export default function IngredientsPage() {
    const [ingredientForm, setIngredientForm] = useState<Ingredient>(new Ingredient());
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [errors, setErrors] = useState<IngredientErrorForm>(new IngredientErrorForm());
    const [toggleButtonText, setToggleButtonText] = useState<string>("Show ingredient form");

    function handleChange(event: SyntheticEvent) {
        const target = event.target as HTMLInputElement;
        setIngredientForm({ ...ingredientForm, [target.name]: target.value })
    }

    function handleSubmit(event: SyntheticEvent) {
        event.preventDefault();
        if (formIsInvalid()) {
            return;
        }
        saveIngredient(ingredientForm)
            .then(savedIngredient => {
                let newIngredientsArray = ingredients.slice();
                newIngredientsArray.push(savedIngredient);
                setIngredients(newIngredientsArray);
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

        return Object.keys(_errors).length >= 0;
    }

    useEffect(() => {
        getIngredients().then(_ingredients => setIngredients(_ingredients));
    }, [ingredients]);

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
                    <IngredientsForm ingredientForm={ingredientForm} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />
                </div>
            </div>
            <div className="card card-body mb-2">
                <IngredientsTable ingredients={ingredients} />
            </div>
        </>
    );
};
