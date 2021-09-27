import React from 'react';

function IngredientsTable() {
    return (
        <>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Fat</th>
                    <th>Carbohydrates</th>
                    <th>Protein</th>
                    <th>Calories</th>
                </tr>
                <tr>
                    <td>Foo</td>
                    <td>1.1</td>
                    <td>1.2</td>
                    <td>1.3</td>
                    <td>1.4</td>
                </tr>
            </table>
        </>
    );
};

export default IngredientsTable;
