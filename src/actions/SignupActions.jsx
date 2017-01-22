import axios from 'axios';
import * as types from '../constants/ActionTypes';
import endpoints from '../config/apiConfig';

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
    axios.post(endpoints.register, userDetails)
      .then((response) => dispatch(signupSuccess(response.data)))
      .catch((error) => dispatch(signupFailed(error.data)))
  });

}