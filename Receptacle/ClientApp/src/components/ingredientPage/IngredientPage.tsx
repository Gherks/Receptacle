import React, { useState, useEffect, SyntheticEvent } from 'react';
import IngredientsForm from './IngredientsForm';
import IngredientsTable from './IngredientsTable';
import Ingredient from './Ingredient';
import IngredientErrorForm from './IngredientErrorForm';

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
        if (!formIsValid()) {
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: ingredientForm.name,
                fat: ingredientForm.fat,
                carbohydrates: ingredientForm.carbohydrates,
                protein: ingredientForm.protein,
                calories: ingredientForm.calories
            })
        };
        fetch('api/ingredients', requestOptions)
            .then(response => response.json())
            .then(data => {
                let newIngredients = ingredients.slice();
                newIngredients.push({
                    id: data.id,
                    name: data.name,
                    fat: data.fat,
                    carbohydrates: data.carbohydrates,
                    protein: data.protein,
                    calories: data.calories,
                });

                setIngredients(newIngredients);
            });
    }

    function formIsValid() {
        let _errors: any = {};

        if (!ingredientForm.name) _errors.name = "Name is required";
        if (ingredientForm.fat <= 0) _errors.fat = "Fat must be greater than zero";
        if (ingredientForm.carbohydrates <= 0) _errors.carbohydrates = "Carbohydrates must be greater than zero";
        if (ingredientForm.protein <= 0) _errors.protein = "Protein must be greater than zero";
        if (ingredientForm.calories <= 0) _errors.calories = "Calories must be greater than zero";

        setErrors(_errors);

        return Object.keys(_errors).length === 0;
    }

    useEffect(() => {
        fetch("api/ingredients")
            .then(response => response.json())
            .then(_ingredients => setIngredients(_ingredients));
    }, []);

    return (
        <>
            <h1>Ingredients</h1>
            <IngredientsForm ingredientForm={ingredientForm} onChange={handleChange} onSubmit={handleSubmit} errors={errors}/>
            <IngredientsTable ingredients={ingredients} />
        </>
    );
};
