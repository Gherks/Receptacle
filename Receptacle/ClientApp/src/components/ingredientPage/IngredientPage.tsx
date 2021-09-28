import React, { useState, useEffect } from 'react';
import IngredientsInput from './IngredientsInput'
import IngredientsTable from './IngredientsTable'
import Ingredient from './Ingredient'

function Ingredients() {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    useEffect(() => {
        fetch("api/ingredients")
            .then(response => response.json())
            .then(_ingredients => setIngredients(_ingredients));
    }, []);

    return (
        <>
            <h1>Ingredients</h1>
            <p>This is a simple example of a React component.</p>
            <IngredientsInput />
            <IngredientsTable ingredients={ingredients} />
        </>
    );
};

export default Ingredients;
