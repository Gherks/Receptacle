import React from 'react';
import IngredientsInput from './IngredientsInput'
import IngredientsTable from './IngredientsTable'

function Ingredients() {
    return (
        <>
            <h1>Ingredients</h1>
            <p>This is a simple example of a React component.</p>
            <IngredientsInput />
            <IngredientsTable />
        </>
    );
};

export default Ingredients;
