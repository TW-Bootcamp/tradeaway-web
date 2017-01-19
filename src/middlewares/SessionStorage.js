import {LOGIN_SUCCESS, LOGOUT} from '../constants/ActionTypes'
export const login = store => next => action => {
    let result = next(action);
    const state = store.getState();
    if (action.type === LOGIN_SUCCESS) {
        sessionStorage.setItem("token", state.login.authToken);
        sessionStorage.setItem("role", state.login.role);
    }
    if (action.type === LOGOUT) {
        sessionStorage.clear();
    }
    return result
};

export const logger = store => next => action => {
    console.info('dispatching', action);
    let result = next(action);
    console.info('next state', store.getState());
    return result
};