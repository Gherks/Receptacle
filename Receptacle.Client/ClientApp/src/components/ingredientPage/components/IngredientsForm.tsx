import React, { ChangeEventHandler, FormEventHandler } from 'react';
import Ingredient from '../../../dto/Ingredient';
import TextInput from './../../common/TextInput';
import NumberInput from './../../common/NumberInput';
import SelectInput from './../../common/SelectInput';
import { IngredientForm, IngredientErrorForm } from './Forms';
import IngredientCategory from '../../../dto/IngredientCategory';
import { emptyGuid } from '../../../utility/Guid';

function IngredientsForm(props: {
    ingredientForm: IngredientForm,
    ingredientCategories: IngredientCategory[],
    onChange: ChangeEventHandler<HTMLInputElement>,
    onCategorySelectChange: ChangeEventHandler<HTMLSelectElement>,
    onSubmit: FormEventHandler<HTMLFormElement>,
    errors: IngredientErrorForm
}) {
    return (
        <form onSubmit={props.onSubmit}>
            <div className="mb-2">
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
            </div>
            <div className="mb-2">
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
            </div>
            <div className="mb-2">
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
            </div>
            <div className="mb-2">
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
            </div>
            <div className="mb-2">
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
            </div>
            <div className="mb-2">
                <SelectInput
                    inputForm={{
                        id: "category-selector",
                        name: "category-selector",
                        value: props.ingredientForm.selectedCategoryId,
                        onSelectChange: props.onCategorySelectChange,
                        options: [{ value: emptyGuid, label: "Choose a category..." }].concat(props.ingredientCategories.map(ingredientCategory => {
                            return { value: ingredientCategory.id, label: ingredientCategory.name };
                        }))
                    }}
                    error={props.errors.category}
                />
            </div>
            <button className="btn btn-primary" type="submit">Add ingredient</button>
        </form >
    );
};

export default IngredientsForm;


