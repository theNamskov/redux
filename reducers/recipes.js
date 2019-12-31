import { ADD_RECIPE, SET_RECIPES } from '../constants/actionTypes';

const initialState = [{ name: 'Omelette' }];

const recipesReducer = (recipes = initialState, action) => {
    switch(action.type) {
        case ADD_RECIPE:
            return recipes.concat(action.payload);

        case SET_RECIPES:
            return action.payload;
    }

    return recipes;
}


export default recipesReducer;