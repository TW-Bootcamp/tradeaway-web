/* src/actions/LoginActions.js */
import axios from 'axios';
import * as types from '../constants/ActionTypes';

export function localLogin() {
    return {
        type: types.TRY_LOGIN,
    };
}

export function loginSuccess(payload) {
    return {
        type: types.LOGIN_SUCCESS,
        payload
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
        return axios.post('/api/auth', userDetails)
            .then((response) => dispatch(loginSuccess(response.data)))
            .catch((error) => dispatch(loginFailed(error.response && error.response.data && error.response.data.message)))
    });
}

export function user(token) {
    return ((dispatch) => {
        return axios.get('/api/user', {
            headers: {"Authorization": token}
        })
            .then((response) => dispatch(userSuccess(response.data)))
            .catch((error) => dispatch(userFailure(error.response && error.response.data && error.response.data.message)));
    });
}