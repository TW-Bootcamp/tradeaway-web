import reducer from '../../src/reducers/Login'
import * as types from '../../src/constants/ActionTypes'


describe('Login Reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual({})
    });

    it('should handle LOGIN_SUCCESS', () => {
        expect(
            reducer({}, {
                type: types.LOGIN_SUCCESS,
                payload: {token:"foobarbaz",authority:"ROLE_SELLER"}
            })
        ).toEqual({success: true, authToken: "foobarbaz", role:"ROLE_SELLER"});
    });
    it('should handle LOGIN_FAILED', () => {
        expect(
            reducer({}, {
                type: types.LOGIN_FAILED,
                payload: "unauthorized"
            })
        ).toEqual({success: false, message: "unauthorized"});
    });
    it('should handle USER_SUCCESS', () => {
        var user = {role: "seller"};
        expect(
            reducer({success: true}, {
                type: types.USER_SUCCESS,
                payload: user
            })
        ).toEqual({success: true, user});
    });
    it('should handle USER_FAILED', () => {
        expect(
            reducer({}, {
                type: types.USER_FAILED,
                payload: "not authorized"
            })
        ).toEqual({success: false, message: "not authorized"});
    });
});
