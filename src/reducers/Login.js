import * as types from '../constants/ActionTypes';
const initialState = {};
export default (state = initialState, action) => {
    switch (action.type) {
        case types.TRY_LOGIN: {
            const token = sessionStorage.getItem("token");
            const role = sessionStorage.getItem("role");
            if (token && role) {
                return {
                    ...state,
                    success: true,
                    authToken: token,
                    role
                };
            }
            return {...state};
        }
        case types.LOGIN_SUCCESS: {
            sessionStorage.setItem("token", action.payload.token);
            sessionStorage.setItem("role", action.payload.authority);
            return {
                ...state,
                success: true,
                authToken: action.payload.token,
                role: action.payload.authority,
            };
        }
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
