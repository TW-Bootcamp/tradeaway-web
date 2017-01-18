import * as types from '../constants/ActionTypes';
const initialState = {};
export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                success: true,
                authToken: action.payload,
            };
        case types.LOGIN_FAILED:
        case types.USER_FAILED:
            return {success: false, message: action.payload};
        case types.USER_SUCCESS:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
};
