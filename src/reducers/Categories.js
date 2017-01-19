import * as types from '../constants/ActionTypes';
const initialState = [];
export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_CATEGORIES:
            return action.categories.data;

        case types.LOAD_CATEGORIES_FAILURE:
            return {
                ...state,
                success: false,
                message: 'Error loading categories'
            };
        default:
            return state;
    }
};
