/* src/actions/LoginActions.js */
import axios from 'axios';
import * as types from '../constants/ActionTypes';

export function loginSuccess(userDetails) {
    return {
        type: types.LOGIN_SUCCESS,
        payload: userDetails
    };
}
export function loginFailed(message) {
    return {
        type: types.LOGIN_FAILED,
        payload: message
    };
}
export function login(userDetails) {
    return ((dispatch) => {
        axios.post('/api/auth', userDetails)
            .then((response) => dispatch(loginSuccess(response)))
            .catch((error) => dispatch(loginFailed(error.response.message)))
    });

}
