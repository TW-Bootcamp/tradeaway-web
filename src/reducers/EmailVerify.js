import * as types from '../constants/ActionTypes';
const initialState = {};
export default (state = initialState, action) => {
    switch (action.type) {
        case types.EMAIL_VERIFY_SUCCESS:
            return {
                success: true
            };
        case types.EMAIL_VERIFY_FAILED:
            return {success: false};
        default:
            return state;
    }
};
