import React from 'react'
import {shallow} from 'enzyme'
import {EmailVerification} from '../../src/components/EmailVerification'

function setup() {
    const props = {
        verifyState: {},
        verifyActions: {verifyEmail: jest.fn()}
    };

    const enzymeWrapper = shallow(<EmailVerification {...props}/>);

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Email', () => {
        it('should render self and subcomponents', () => {
            const {enzymeWrapper} = setup();

            expect(enzymeWrapper.find('h3').text()).toBe("Email Verification");

            expect(enzymeWrapper.find('button').text()).toBe('Verify Email');
        });

        // it('should call onSubmit on click of Verify button', () => {
        //     const {enzymeWrapper, props} = setup();
        //     const input = enzymeWrapper.find('form');
        //     input.props().onSubmit({preventDefault: jest.fn()});
        //     expect(props.loginActions.verifyEmail.mock.calls.length).toBe(1);
        // })
    })
})