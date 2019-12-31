import { FETCH_RECIPES, FETCH_INGREDIENTS } from '../constants/actionTypes';
import { setRecipes } from '../actions/recipes';
import { setIngredients } from '../actions/ingredients';

const URL = '../database/db.json';

function fetchData(url, callback) {
    fetch(url)
        .then(res => res.json())
        .then(callback)
        .catch(err => console.log(`Error fetching recipes: ${ err }`));
};


const apiMiddleware = ({ dispatch }) => next => action => {
    switch(action.type) {
        case FETCH_RECIPES:
            fetchData(URL, ( data ) => dispatch(setRecipes(data.recipes)));

        case FETCH_INGREDIENTS:
            fetchData(URL, ( data ) => dispatch(setIngredients(data.ingredients)));
    }

    next(action);
};


export default apiMiddleware;