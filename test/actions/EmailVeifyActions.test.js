import axios from 'axios';
var MockAdapter = require('axios-mock-adapter');
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import * as actions from '../../src/actions/EmailVerifyActions';
import * as types from '../../src/constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
    it('should create an action for email verify success', () => {
        const expectedAction = {
            type: types.EMAIL_VERIFY_SUCCESS,
        };
        expect(actions.verifySuccess()).toEqual(expectedAction)
    });

    it('should create an action for email verify failure', () => {
        const expectedAction = {
            type: types.EMAIL_VERIFY_FAILED,
        };
        expect(actions.verifyFailed()).toEqual(expectedAction)
    });

    it("should fire verify email api call", () => {
        var mock = new MockAdapter(axios);
        var payload = {username: "user1", token: "foorbarbaz"};
        mock.onPost("/api/auth/verify", payload).reply(200);

        const expectedActions = [
            {type: types.EMAIL_VERIFY_SUCCESS},
        ];

        const store = mockStore({email: {}})
        return store.dispatch(actions.verifyEmail(payload))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    });
});