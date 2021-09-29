import React, { ChangeEventHandler } from 'react';
import Ingredient from './Ingredient';

function IngredientsForm(props: { ingredientForm: Ingredient, onChange: ChangeEventHandler<HTMLInputElement> }) {
    return (
        <>
            <div className="input-group mb-3">
                <input value={props.ingredientForm.name} onChange={props.onChange} id="name" name="name" type="text" className="form-control" placeholder="Name" aria-label="Name" />
                <input value={props.ingredientForm.fat} onChange={props.onChange} id="fat" name="fat" type="text" className="form-control" placeholder="Fat" aria-label="Fat" />
                <input value={props.ingredientForm.carbohydrates} onChange={props.onChange} id="carbohydrates" name="carbohydrates" type="text" className="form-control" placeholder="Carbohydrates" aria-label="Carbohydrates" />
                <input value={props.ingredientForm.protein} onChange={props.onChange} id="protein" name="protein" type="text" className="form-control" placeholder="Protein" aria-label="Protein" />
                <input value={props.ingredientForm.calories} onChange={props.onChange} id="calories" name="calories" type="text" className="form-control" placeholder="Calories" aria-label="Calories" />
                <button className="btn btn-primary">Add</button>
            </div>
        </>
    );
};

export default IngredientsForm;
