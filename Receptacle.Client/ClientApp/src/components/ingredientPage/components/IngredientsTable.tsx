import React, { useState, MouseEvent, MouseEventHandler } from 'react';
import Ingredient from '../../../dto/Ingredient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

export default function IngredientsTable(props: {
    categoryName: string,
    ingredients: Ingredient[],
    onIngredientRemovalModalOpen: MouseEventHandler<HTMLButtonElement>
}) {
    return (
        <>
            {props.categoryName && (
                <h2>{props.categoryName}</h2>
            )}
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
                            <tr id={ingredient.id} key={ingredient.id}>
                                <td>{ingredient.name}</td>
                                <td>{ingredient.fat}</td>
                                <td>{ingredient.carbohydrates}</td>
                                <td>{ingredient.protein}</td>
                                <td>{ingredient.calories}</td>
                                <td>
                                    <button className="btn btn-table-action">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button className="btn btn-table-action" onClick={props.onIngredientRemovalModalOpen} data-bs-toggle="modal" data-bs-target="#ingredient_removal">
                                        <FontAwesomeIcon icon={faTrashAlt} />
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
