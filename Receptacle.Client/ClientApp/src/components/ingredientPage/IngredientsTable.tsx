import React, { useState, SyntheticEvent, MouseEvent } from 'react';
import Ingredient from '../../dto/Ingredient';
import ConfirmationModal from './../common/ConfirmationModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { deleteIngredient } from '../../api/ingredientApi';
import { toast } from "react-toastify";

export default function IngredientsTable(props: { ingredients: Ingredient[] }) {
    const [rowTargetId, setRowTargetId] = useState<string>("");
    const [rowTargetName, setRowTargetName] = useState<string>("");
    
    function handleIngredientRemoval(event: SyntheticEvent) {
        event.preventDefault();
        deleteIngredient(rowTargetId)
            .then(() => {
                toast.warn(rowTargetName + " deleted from ingredient table");
            });
    }

    function handleModalOpen(event: MouseEvent<HTMLElement>) {
        event.preventDefault();
        const currentTarget = event.currentTarget as HTMLElement;
        if (currentTarget.parentNode) {
            if (currentTarget.parentNode.parentElement) {
                let rowId = currentTarget.parentNode.parentElement.id;
                setRowTargetId(rowId);

                let name = currentTarget.parentNode.parentElement.children[0].innerHTML;
                setRowTargetName(name);
            }
        }
    }

    return (
        <>
            <ConfirmationModal
                id="ingredient_removal"
                title="Ingredient removal"
                content={"Delete <strong>" + rowTargetName + "</strong> from ingredient table?"}
                onConfirmationClicked={handleIngredientRemoval}
            />
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
                                    <button className="btn btn-table-action" onClick={handleModalOpen} data-bs-toggle="modal" data-bs-target="#ingredient_removal">
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
