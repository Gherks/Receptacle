import React from 'react';
import Ingredient from '../../dto/Ingredient';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

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
                        <th>Actions</th>
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
                                <td>
                                    <button className="btn">
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                    <button className="btn">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
};
