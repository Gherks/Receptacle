import React from 'react';

function IngredientsInput() {
    return (
        <>
            <input placeholder="Name"/>
            <input placeholder="Fat"/>
            <input placeholder="Carbohydrates"/>
            <input placeholder="Protein" />
            <input placeholder="Calories" />
            <button className="btn-primary">Add</button>
        </>
    );
};

export default IngredientsInput;
