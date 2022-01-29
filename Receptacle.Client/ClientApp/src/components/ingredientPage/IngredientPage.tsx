import React, { useState, useEffect, SyntheticEvent, MouseEvent } from "react";
import IngredientsForm from "./components/IngredientsForm";
import IngredientsTable from "./components/IngredientsTable";
import Ingredient from "../../dto/Ingredient";
import IngredientCategory from "../../dto/IngredientCategory";
import { IngredientForm, IngredientErrorForm } from "./components/Forms";
import { deleteIngredient, getIngredients, saveIngredient } from "../../api/ingredientApi";
import { getIngredientCategories } from "../../api/ingredientCategoryApi";
import { toast } from "react-toastify";
import ConfirmationModal from "../common/ConfirmationModal";
import { emptyGuid } from "../../utility/Guid";

export default function IngredientsPage() {
    const [ingredientForm, setIngredientForm] = useState<IngredientForm>(new IngredientForm());
    const [ingredientCollections, setIngredientCollections] = useState<Ingredient[][]>([]);
    const [ingredientCategories, setIngredientCategories] = useState<IngredientCategory[]>([]);
    const [errors, setErrors] = useState<IngredientErrorForm>(new IngredientErrorForm());
    const [toggleButtonText, setToggleButtonText] = useState<string>("Show ingredient form");
    const [rowTargetId, setRowTargetId] = useState<string>("");
    const [rowTargetName, setRowTargetName] = useState<string>("");

    useEffect(() => {
        const _ingredientCollections: Ingredient[][] = [];
        getIngredientCategories().then(_ingredientCategories => {
            setIngredientCategories(_ingredientCategories);
            _ingredientCategories.map(() => {
                _ingredientCollections.push([]);
            })
        });
        getIngredients().then(_ingredients => {
            _ingredients.map((ingredient: Ingredient) => {
                if (ingredient.category) {
                    const categoryIndex: number = ingredient.category.sortOrder;
                    _ingredientCollections[categoryIndex].push(ingredient);
                }
            })
            setIngredientCollections(_ingredientCollections);
        });
    }, []);

    function handleChange(event: SyntheticEvent): void {
        const target: HTMLInputElement = event.target as HTMLInputElement;
        setIngredientForm({ ...ingredientForm, [target.name]: target.value })
    }

    function handleCategorySelectChange(event: SyntheticEvent): void {
        const target: HTMLSelectElement = event.target as HTMLSelectElement;
        const category: IngredientCategory | undefined = ingredientCategories.find(category => category.id === target.value);
        if (category) {
            setIngredientForm({ ...ingredientForm, "selectedCategoryId": category.id })
        }
    }

    function handleSubmit(event: SyntheticEvent): void {
        event.preventDefault();
        if (formIsInvalid()) {
            return;
        }

        let ingredient: Ingredient = formToIngredient(ingredientForm, ingredientCategories);

        saveIngredient(ingredient)
            .then((savedIngredient: Ingredient) => {
                if (savedIngredient && savedIngredient.category) {
                    addIngredientToIngredientCollection(savedIngredient);
                    setIngredientForm(new IngredientForm());
                    toast.success(savedIngredient.name + " saved to ingredient table!");
                } else {
                    toast.error("Unable to properly save ingredient to table");
                }
            });
    }

    function formToIngredient(ingredientForm: IngredientForm, ingredientCategories: IngredientCategory[]): Ingredient {
        return {
            id: "",
            category: ingredientCategories.find(ingredientCategory => ingredientCategory.id === ingredientForm.selectedCategoryId),
            name: ingredientForm.name,
            fat: ingredientForm.fat,
            carbohydrates: ingredientForm.carbohydrates,
            protein: ingredientForm.protein,
            calories: ingredientForm.calories
        }
    }

    function onIngredientRemovalModalOpen(event: MouseEvent<HTMLElement>): void {
        event.preventDefault();
        const currentTarget: HTMLElement = event.currentTarget as HTMLElement;
        if (currentTarget.parentNode) {
            if (currentTarget.parentNode.parentElement) {
                let rowId = currentTarget.parentNode.parentElement.id;
                setRowTargetId(rowId);

                let name = currentTarget.parentNode.parentElement.children[0].innerHTML;
                setRowTargetName(name);
            }
        }
    }

    function handleIngredientRemoval(event: SyntheticEvent): void {
        event.preventDefault();
        removeIngredientFromIngredientCollection(rowTargetId);
        deleteIngredient(rowTargetId)
            .then(() => {
                toast.info(rowTargetName + " deleted from ingredient table");
            });
    }

    function addIngredientToIngredientCollection(ingredient: Ingredient): void {
        if (ingredient && ingredient.category) {
            const index: number = ingredient.category.sortOrder;
            const newIngredientsCollection = [...ingredientCollections];
            newIngredientsCollection[index] = [...newIngredientsCollection[index], ingredient];
            setIngredientCollections(newIngredientsCollection);
        }
    }

    function removeIngredientFromIngredientCollection(ingredientId: string): void {
        const newIngredientsCollection = [...ingredientCollections];
        newIngredientsCollection.map((ingredientCategoryArray: Ingredient[]) => {
            let isDone: boolean = false;
            let index: number = 0;
            ingredientCategoryArray.map((ingredient: Ingredient) => {
                if (ingredient.id === ingredientId && ingredient.category) {
                    newIngredientsCollection[ingredient.category.sortOrder] = [...newIngredientsCollection[ingredient.category.sortOrder]];
                    delete newIngredientsCollection[ingredient.category.sortOrder][index];
                    isDone = true;
                    return;
                }
                index += 1;
            })
            if (isDone) {
                return;
            }
        })
        setIngredientCollections(newIngredientsCollection);
    }

    function formIsInvalid(): boolean {
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

        if (ingredientForm.selectedCategoryId === emptyGuid) _errors.category = "Must provide a category";

        setErrors(_errors);

        return Object.keys(_errors).length > 0;
    }

    function handleCollapseIngredientFormClick(event: MouseEvent<HTMLElement>): void {
        if (event.currentTarget.innerText === "Show ingredient form") {
            setToggleButtonText("Hide ingredient form");
        } else {
            setToggleButtonText("Show ingredient form");
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
            <h1>Ingredients</h1>
            <div className="card card-body mb-2">
                <div>
                    <button className="btn btn-primary" type="button" onClick={handleCollapseIngredientFormClick} data-bs-toggle="collapse" data-bs-target="#collapseIngredientForm" aria-expanded="false" aria-controls="collapseIngredientForm">
                        {toggleButtonText}
                    </button>
                </div>
                <div className="collapse mt-3" id="collapseIngredientForm">
                    <IngredientsForm ingredientForm={ingredientForm} ingredientCategories={ingredientCategories} onChange={handleChange} onCategorySelectChange={handleCategorySelectChange} onSubmit={handleSubmit} errors={errors} />
                </div>
            </div>
            {ingredientCollections.map((ingredientCollection, index) => {
                return (
                    <div className="card card-body mb-2" key={ingredientCategories[index].id}>
                        <IngredientsTable categoryName={ingredientCategories[index].name} ingredients={ingredientCollection} onIngredientRemovalModalOpen={onIngredientRemovalModalOpen} />
                    </div>
                )
            })}
        </>
    );
};
