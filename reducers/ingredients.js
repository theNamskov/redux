import { ADD_INGREDIENT, SET_INGREDIENTS } from '../constants/actionTypes';

const initialState = [{ recipe: 'Omelette', name: 'Egg', quantity: 2 }];

const ingredientsReducer = (ingredients = initialState, action) => {
    switch(action.type) {
        case ADD_INGREDIENT:
            return ingredients.concat(action.payload);

        case SET_INGREDIENTS:
            return action.payload;
    }

    return ingredients;
};

export default ingredientsReducer;