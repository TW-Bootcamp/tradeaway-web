import {LOGIN_SUCCESS} from '../constants/ActionTypes'
export const login = store => next => action => {
    if (action.types === LOGIN_SUCCESS) {
        sessionStorage.setItem("token", action.payload.token);
        sessionStorage.setItem("role", action.payload.authority);
    }
    let result = next(action);
    return result
};

export const logger = store => next => action => {
    console.info('dispatching', action);
    let result = next(action);
    console.info('next state', store.getState());
    return result
};