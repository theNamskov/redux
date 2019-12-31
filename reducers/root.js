import { combineReducers } from 'redux';

import ingredientsReducer from './ingredients';
import recipesReducer from './recipes';

const rootReducer = combineReducers({
    recipes: recipesReducer,
    ingredients: ingredientsReducer
});


export default rootReducer;