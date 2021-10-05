import * as React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import IngredientPage from "./components/ingredientPage/IngredientPage";
import RecipeCreationPage from "./components/recipeCreationPage/RecipeCreationPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./custom.css"

export default () => (
    <>
        <ToastContainer autoClose={3000} hideProgressBar />
        <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/ingredients" component={IngredientPage} />
            <Route path="/recipeCreation" component={RecipeCreationPage} />
        </Layout>
    </>
);
