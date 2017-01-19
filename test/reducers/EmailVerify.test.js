import reducer from '../../src/reducers/EmailVerify'
import * as types from '../../src/constants/ActionTypes'


describe('EmailVerify Reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual({})
    });

    it('should handle EMAIL_VERIFY_SUCCESS', () => {
        expect(
            reducer({}, {
                type: types.EMAIL_VERIFY_SUCCESS,
            })
        ).toEqual({success: true});
    });
    it('should handle EMAIL_VERIFY_FAILED', () => {
        expect(
            reducer({}, {
                type: types.EMAIL_VERIFY_FAILED,
            })
        ).toEqual({success: false});
    });
});
