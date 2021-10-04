import React, { SyntheticEvent, useState } from 'react';
import TextInput from './../common/TextInput';
import NumberInput from './../common/NumberInput';
import RecipeCreationErrorForm from './RecipeCreationErrorForm';
import Recipe from './../../dto/Recipe';

export default function RecipeCreationPage() {
    const [recipeForm, setRecipeForm] = useState<Recipe>(new Recipe());
    const [errors, setErrors] = useState<RecipeCreationErrorForm>(new RecipeCreationErrorForm());

    function handleChange(event: SyntheticEvent) {
        const target = event.target as HTMLInputElement;
        setRecipeForm({ ...recipeForm, [target.name]: target.value })
    }

    function handleSubmit(event: SyntheticEvent) {
        event.preventDefault();
        if (formIsInvalid()) {
            return;
        }
    }

    function formIsInvalid() {
        let _errors: any = {};

        if (!recipeForm.name) _errors.name = "Name is required";

        if (!recipeForm.basePortions) _errors.basePortions = "Must provide a value for base portions";
        else if (recipeForm.basePortions < 0) _errors.basePortions = "Base portions cannot be less than 0";

        setErrors(_errors);

        return Object.keys(_errors).length >= 0;
    }

    return (
        <>
            <h1>Recipe creation</h1>
            <div className="card card-body mb-2">
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <TextInput
                            inputForm={{
                                id: "name",
                                name: "name",
                                placeholder: "Name",
                                value: recipeForm.name,
                                onChange: handleChange
                            }}
                            error={errors.name}
                        />
                    </div>
                    <div className="mb-2">
                        <NumberInput
                            inputForm={{
                                id: "basePortions",
                                name: "basePortions",
                                placeholder: "Base portions",
                                value: recipeForm.basePortions,
                                onChange: handleChange
                            }}
                            error={errors.basePortions}
                        />
                    </div>
                    <div className="mb-2">
                        <div className="form-floating">
                            <textarea
                                id="instructionTextArea"
                                name="instructionTextArea"
                                className="form-control"
                                value={recipeForm.instructions}
                                onChange={handleChange}
                                placeholder="Enter instructions here"
                                aria-label="instructionTextArea"
                                style={{ height: "200px" }}>
                            </textarea>
                            <label htmlFor="instructionTextArea">Instructions</label>
                            <p>
                                <a className="link-primary" href="https://www.markdownguide.org/cheat-sheet/">Markdown Cheat Sheet</a>
                            </p>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Add recipe</button>
                </form >
            </div>
        </>
    );
};
