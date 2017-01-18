import axios from 'axios';
var MockAdapter = require('axios-mock-adapter');
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import * as actions from '../../src/actions/LoginActions';
import * as types from '../../src/constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
    it('should create an action for login success', () => {
        const token = 'foobarbaz';
        const expectedAction = {
            type: types.LOGIN_SUCCESS,
            payload: token
        };
        expect(actions.loginSuccess(token)).toEqual(expectedAction)
    });

    it('should create an action for login failure', () => {
        const message = 'unauthorized';
        const expectedAction = {
            type: types.LOGIN_FAILED,
            payload: message
        };
        expect(actions.loginFailed(message)).toEqual(expectedAction)
    });

    it('should create an action for user success', () => {
        const user = {role: "seller"};
        const expectedAction = {
            type: types.USER_SUCCESS,
            payload: user
        };
        expect(actions.userSuccess(user)).toEqual(expectedAction)
    });

    it('should create an action for user failure', () => {
        const message = 'unauthorized';
        const expectedAction = {
            type: types.USER_FAILED,
            payload: message
        };
        expect(actions.userFailure(message)).toEqual(expectedAction)
    });

    it("should fire login api call", () => {
        var mock = new MockAdapter(axios);
        var payload = {username: "user1", password: "pass1"};
        mock.onPost("/api/auth", payload).reply(200, {token: "foobarbaz"});

        const expectedActions = [
            {type: types.LOGIN_SUCCESS, payload: "foobarbaz"},
        ];

        const store = mockStore({login: {}})
        return store.dispatch(actions.login(payload))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    });

    it("should fire user api call", () => {
        var mock = new MockAdapter(axios);
        var user = {role: "seller"};
        const token = "foobarbaz";
        mock.onGet("/api/user").reply(200, user);

        const expectedActions = [
            {type: types.USER_SUCCESS, payload: user},
        ];

        const store = mockStore({login: {}})
        return store.dispatch(actions.user(token))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    });
});