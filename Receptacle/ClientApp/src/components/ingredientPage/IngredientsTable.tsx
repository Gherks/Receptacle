import React from 'react';
import Ingredient from './Ingredient';

export default function IngredientsTable(props: { ingredients: Ingredient[] }) {
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
                    {props.ingredients.map(ingredient => {
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
