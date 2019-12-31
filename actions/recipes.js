import { ADD_RECIPE, SET_RECIPES, FETCH_RECIPES } from '../constants/actionTypes';

export const addRecipe = (name) => ({
    type: ADD_RECIPE,
    payload: { name }
});

export const setRecipes = (recipes) => ({
    type: SET_RECIPES,
    payload: recipes 
});

export const fetchRecipes = () => ({ type: FETCH_RECIPES });