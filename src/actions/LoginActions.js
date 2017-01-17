/* src/actions/LoginActions.js */
import axios from 'axios';
import * as types from '../constants/ActionTypes';

export function loginAction(userDetails) {
    return {
        type: types.LOGIN,
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
        axios.post('/api/users/loginAction', userDetails)
            .then((response) => dispatch(loginAction(response)))
            .catch((error) => dispatch(loginFailed(error.response.message)))
    });

}
