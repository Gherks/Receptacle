import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import IngredientPage from './components/ingredientPage/IngredientPage';
import RecipeCreationPage from './components/recipeCreationPage/RecipeCreationPage';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/ingredients' component={IngredientPage} />
        <Route path='/recipeCreation' component={RecipeCreationPage} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    </Layout>
);
