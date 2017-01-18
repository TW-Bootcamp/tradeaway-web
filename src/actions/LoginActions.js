/* src/actions/LoginActions.js */
import axios from 'axios';
import * as types from '../constants/ActionTypes';

export function loginSuccess(token) {
    return {
        type: types.LOGIN_SUCCESS,
        payload: token
    };
}
export function loginFailed(message) {
    return {
        type: types.LOGIN_FAILED,
        payload: message
    };
}
export function userSuccess(user) {
    return {
        type: types.USER_SUCCESS,
        payload: user
    };
}
export function userFailure(message) {
    return {
        type: types.USER_FAILED,
        payload: message
    };
}
export function login(userDetails) {
    return ((dispatch) => {
        axios.post('/api/auth', userDetails)
            .then((response) => dispatch(loginSuccess(response.data && response.data.token)))
            .catch((error) => dispatch(loginFailed(error.response && error.response.data && error.response.data.message)))
    });
}

export function user(token) {
    return ((dispatch) => {
        axios.get('/api/user', {
            headers: {"Authorization": token}
        })
            .then((response) => dispatch(userSuccess(response.data)))
            .catch((error) => dispatch(userFailure(error.response && error.response.data && error.response.data.message)));
    });
}
