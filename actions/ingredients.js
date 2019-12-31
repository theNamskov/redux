import { ADD_INGREDIENT, SET_INGREDIENTS, FETCH_INGREDIENTS } from '../constants/actionTypes';

export const addIngredient = (recipe, name, quantity, measure) => ({
    type: ADD_INGREDIENT,
    payload: { recipe, name, quantity, measure }
});

export const setIngredients = (ingredients) => ({ 
    type: SET_INGREDIENTS,
    payload: ingredients
});

export const fetchIngredients = () => ({ type: FETCH_INGREDIENTS });