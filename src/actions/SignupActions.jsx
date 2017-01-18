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
export function login(userDetails) {
  return ((dispatch) => {
    axios.post('/api/auth', userDetails)
      .then((response) => dispatch(loginSuccess(response.data || response.data.token)))
      .catch((error) => dispatch(loginFailed(error.data || error.data.message)))
  });

}