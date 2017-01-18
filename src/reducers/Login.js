import * as types from '../constants/ActionTypes';
const initialState = {};
export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                authToken: action.payload,
                success: true
            };
        case types.LOGIN_FAILED:
            return {success: false, message: action.payload};
        default:
            return state;
    }
};
