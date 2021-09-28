import React, { useState, useEffect } from 'react';
import Ingredient from './Ingredient'

export default function IngredientsTable() {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    useEffect(() => {
        fetch("api/ingredients")
            .then(response => response.json())
            .then(_ingredients => setIngredients(_ingredients));
    }, []);

    return (
        <>
            <table className="table table-hover table-striped table-sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Fat</th>
                        <th>Carbohydrates</th>
                        <th>Protein</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {ingredients.map(ingredient => {
                        return (
                            <tr key={ingredient.id}>
                                <td>{ingredient.name}</td>
                                <td>{ingredient.fat}</td>
                                <td>{ingredient.carbohydrates}</td>
                                <td>{ingredient.protein}</td>
                                <td>{ingredient.calories}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
};
