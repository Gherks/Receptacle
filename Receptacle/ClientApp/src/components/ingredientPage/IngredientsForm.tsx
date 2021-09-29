import React, { ChangeEventHandler, SyntheticEvent, useState } from 'react';
import Ingredient from './Ingredient';
import TextInput from './../common/TextInput';
import NumberInput from './../common/NumberInput';

function IngredientsForm(props: { ingredientForm: Ingredient, onChange: React.ChangeEventHandler<HTMLInputElement>, onSubmit }) {
    return (
        <div className="input-group mb-3">
            <TextInput
                inputForm={{
                    id: "name",
                    name: "name",
                    placeholder: "Name",
                    value: props.ingredientForm.name,
                    onChange: props.onChange
                }}
                error={""}
            />
            <NumberInput
                inputForm={{
                    id: "fat",
                    name: "fat",
                    placeholder: "Fat",
                    value: props.ingredientForm.fat,
                    onChange: props.onChange
                }}
                error={""}
            />
            <NumberInput
                inputForm={{
                    id: "carbohydrates",
                    name: "carbohydrates",
                    placeholder: "Carbohydrates",
                    value: props.ingredientForm.carbohydrates,
                    onChange: props.onChange
                }}
                error={""}
            />
            <NumberInput
                inputForm={{
                    id: "protein",
                    name: "protein",
                    placeholder: "Protein",
                    value: props.ingredientForm.protein,
                    onChange: props.onChange
                }}
                error={""}
            />
            <NumberInput
                inputForm={{
                    id: "calories",
                    name: "calories",
                    placeholder: "Calories",
                    value: props.ingredientForm.calories,
                    onChange: props.onChange
                }}
                error={""}
            />
            <button className="btn btn-primary">Add</button>
        </div>
    );
};

export default IngredientsForm;
