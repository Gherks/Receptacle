import React, { useState, useEffect, SyntheticEvent } from 'react';
import IngredientsForm from './IngredientsForm';
import IngredientsTable from './IngredientsTable';
import Ingredient from './Ingredient';

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

    function handleChange(event: SyntheticEvent) {
        const target = event.target as HTMLInputElement;
        setIngredientForm({ ...ingredientForm, [target.name]: target.value })
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
            <IngredientsForm ingredientForm={ingredientForm} onChange={handleChange} />
            <IngredientsTable ingredients={ingredients} />
        </>
    );
};

export default Ingredients;
