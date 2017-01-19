/* src/actions/CategoryActions.js */
import axios from 'axios';
import * as types from '../constants/ActionTypes';

export function categoriesLoaded(response) {
    return {
        type: types.LOAD_CATEGORIES,
        categories: response
    };
}


export function categoryLoadingFailed(error) {
    return {
        type: types.LOAD_CATEGORIES_FAILURE
    };
}

export function loadCategories(token) {
    return ((dispatch) => {
        var config = {
            headers: {
                "Authorization": token
            }
        };
        return axios.get('/api/categories', config)
            .then((response) => dispatch(categoriesLoaded(response)))
            .catch((error) => dispatch(categoryLoadingFailed(error)));
    });
}
