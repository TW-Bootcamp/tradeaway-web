import * as types from '../constants/ActionTypes';
const initialState = {};
const login = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                authToken: action.payload,
                success: true
            };
        case types.LOGIN_FAILED:
            return {success: false, message: action.message};
        default:
            return state;
    }
};

export default login;
