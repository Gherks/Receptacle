import React, { ChangeEventHandler, FormEventHandler } from 'react';
import Ingredient from '../../dto/Ingredient';
import TextInput from './../common/TextInput';
import NumberInput from './../common/NumberInput';
import IngredientErrorForm from './IngredientErrorForm';

function IngredientsForm(props: {
    ingredientForm: Ingredient,
    onChange: ChangeEventHandler<HTMLInputElement>,
    onSubmit: FormEventHandler<HTMLFormElement>,
    errors: IngredientErrorForm
}) {
    return (
        <form className="input-group mb-3" onSubmit={props.onSubmit}>
            <TextInput
                inputForm={{
                    id: "name",
                    name: "name",
                    placeholder: "Name",
                    value: props.ingredientForm.name,
                    onChange: props.onChange
                }}
                error={props.errors.name}
            />
            <NumberInput
                inputForm={{
                    id: "fat",
                    name: "fat",
                    placeholder: "Fat",
                    value: props.ingredientForm.fat,
                    onChange: props.onChange
                }}
                error={props.errors.fat}
            />
            <NumberInput
                inputForm={{
                    id: "carbohydrates",
                    name: "carbohydrates",
                    placeholder: "Carbohydrates",
                    value: props.ingredientForm.carbohydrates,
                    onChange: props.onChange
                }}
                error={props.errors.carbohydrates}
            />
            <NumberInput
                inputForm={{
                    id: "protein",
                    name: "protein",
                    placeholder: "Protein",
                    value: props.ingredientForm.protein,
                    onChange: props.onChange
                }}
                error={props.errors.protein}
            />
            <NumberInput
                inputForm={{
                    id: "calories",
                    name: "calories",
                    placeholder: "Calories",
                    value: props.ingredientForm.calories,
                    onChange: props.onChange
                }}
                error={props.errors.calories}
            />
            <button className="btn btn-primary" type="submit">Add</button>
        </form>
    );
};

export default IngredientsForm;
