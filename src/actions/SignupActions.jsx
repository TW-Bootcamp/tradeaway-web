import axios from 'axios';
import * as types from '../constants/ActionTypes';

export function signupSuccess(data) {
  return {
    type: types.SIGNUP_SUCCESS,
    payload: data
  };
}
export function signupFailed(data) {
  return {
    type: types.SIGNUP_FAILED,
    payload: data
  };
}
export function signup(userDetails) {
  return ((dispatch) => {
    axios.post('/api/user/register', userDetails)
      .then((response) => dispatch(signupSuccess(response.data)))
      .catch((error) => dispatch(signupFailed(error.data)))
  });

}