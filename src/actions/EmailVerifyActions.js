import axios from 'axios';
import * as types from '../constants/ActionTypes';

export function verifySuccess() {
    return {
        type: types.EMAIL_VERIFY_SUCCESS,
    };
}

export function verifyFailed() {
    return {
        type: types.EMAIL_VERIFY_FAILED,
    };
}

export function verifyEmail(verificationDetails) {
    return ((dispatch) => {
        return axios.post('/api/auth/verify', verificationDetails)
            .then((response) => dispatch(verifySuccess()))
            .catch((error) => dispatch(verifyFailed()))
    });
}