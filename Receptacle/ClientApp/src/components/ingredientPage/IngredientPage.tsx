import React, { useState, useEffect, SyntheticEvent } from 'react';
import IngredientsForm from './IngredientsForm';
import IngredientsTable from './IngredientsTable';
import Ingredient from './Ingredient';

interface IngredientErrorForm {
    name: string,
    fat: string,
    carbohydrates: string,
    protein: string,
    calories: string
}

function Ingredients() {
    const [ingredientForm, setIngredientForm] = useState<Ingredient>({
        id: "",
        name: "",
        fat: 0,
        carbohydrates: 0,
        protein: 0,
        calories: 0
    })

    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [error, setError] = useState<IngredientErrorForm>();

    function handleChange(event: SyntheticEvent) {
        const target = event.target as HTMLInputElement;
        setIngredientForm({ ...ingredientForm, [target.name]: target.value })
    }

    function handleSubmit(event: SyntheticEvent) {
        event.preventDefault();
        if (!formIsValid()) {
            return;
        }
        // Save stuff
    }

    function formIsValid() {
        const _errors: IngredientErrorForm = {
            name: "",
            fat: "",
            carbohydrates: "",
            protein: "",
            calories: ""
        };

        let hasErrors = false;

        if (!ingredientForm.name) {
            _errors.name = "Name is required";
            hasErrors = true;
        }
        if (ingredientForm.fat <= 0) {
            _errors.fat = "Fat must be greater than zero";
            hasErrors = true;
        }
        if (ingredientForm.carbohydrates <= 0) {
            _errors.carbohydrates = "Carbohydrates must be greater than zero";
            hasErrors = true;
        }
        if (ingredientForm.protein <= 0) {
            _errors.protein = "Protein must be greater than zero";
            hasErrors = true;
        }
        if (ingredientForm.calories <= 0) {
            _errors.calories = "Calories must be greater than zero";
            hasErrors = true;
        }

        setError(_errors);

        return hasErrors;
    }

    useEffect(() => {
        fetch("api/ingredients")
            .then(response => response.json())
            .then(_ingredients => setIngredients(_ingredients));
    }, []);

    return (
        <>
            <h1>Ingredients</h1>
            <p>This is a simple example of a React component.</p>
            <IngredientsForm ingredientForm={ingredientForm} onChange={handleChange} onSubmit={handleSubmit}/>
            <IngredientsTable ingredients={ingredients} />
        </>
    );
};

export default Ingredients;
