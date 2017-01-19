import React from 'react'
import {mount} from 'enzyme'
import {Login} from '../../src/components/Login'

function setup() {
    const props = {
        loginState: {},
        loginActions: {login: jest.fn(), localLogin: jest.fn()}
    };

    const enzymeWrapper = mount(<Login {...props}/>);

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Login', () => {
        it('should render self and subcomponents', () => {
            const {enzymeWrapper} = setup();

            expect(enzymeWrapper.find('h2').hasClass('text-center')).toBe(true);

            expect(enzymeWrapper.find('h2').text()).toBe("Welcome to TradeAway");

            expect(enzymeWrapper.find('.login-section').at(0).text()).toBe('Existing User :');
            expect(enzymeWrapper.find('.login-section').at(1).text()).toBe('New User :');
            expect(enzymeWrapper.find('label').at(0).text()).toBe('Username');
            expect(enzymeWrapper.find('label').at(1).text()).toBe('Password');

            const usernameInputProps = enzymeWrapper.find('input').at(0).props();
            expect(usernameInputProps.placeholder).toEqual('Username');

            const passwordInputProps = enzymeWrapper.find('input').at(1).props();
            expect(passwordInputProps.placeholder).toEqual('Password');

            expect(enzymeWrapper.find('button').text()).toBe('Login');
        });

        it('should render err message when login fails', () => {
            const props = {
                loginState: {success: false},
                loginActions: {login: jest.fn(), localLogin: jest.fn()}
            };
            const enzymeWrapper = mount(<Login {...props}/>);

            expect(enzymeWrapper.find('h4').text()).toBe('Error!');
        });

        it('should call onSubmit on click of Login button', () => {
            const {enzymeWrapper, props} = setup();
            const input = enzymeWrapper.find('form');
            input.props().onSubmit({preventDefault: jest.fn()});
            expect(props.loginActions.login.mock.calls.length).toBe(1);
        })
    })
})