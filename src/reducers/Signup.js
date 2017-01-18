import * as types from '../constants/ActionTypes';
const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        success: true,
        message: "success",
      };
    case types.SIGNUP_FAILED:
      return {success: false, message: "failure"};
    default:
      return state;
  }
};
