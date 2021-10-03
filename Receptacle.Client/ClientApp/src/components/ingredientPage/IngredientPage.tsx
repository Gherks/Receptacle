import React, { useState, useEffect, SyntheticEvent } from 'react';
import IngredientsForm from './IngredientsForm';
import IngredientsTable from './IngredientsTable';
import Ingredient from '../../dto/Ingredient';
import IngredientErrorForm from './IngredientErrorForm';
import { getIngredients, saveIngredient } from '../../api/ingredientApi';

export default function Ingredients() {
    const [ingredientForm, setIngredientForm] = useState<Ingredient>(new Ingredient());
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [errors, setErrors] = useState<IngredientErrorForm>(new IngredientErrorForm());

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

    return (
        <>
            <h1>Ingredients</h1>
            <IngredientsForm ingredientForm={ingredientForm} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />
            <IngredientsTable ingredients={ingredients} />
        </>
    );
};
