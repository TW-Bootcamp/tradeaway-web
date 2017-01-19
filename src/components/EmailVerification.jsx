import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {HOME_PAGE} from '../constants/Route';

import * as emailVerifyActions from '../actions/EmailVerifyActions'

function stateToProps(state) {
    return {
        verifyState: state.email
    };
}

function dispatchToProps(dispatch) {
    return {
        verifyActions: bindActionCreators(emailVerifyActions, dispatch),
    };
}

export class EmailVerification extends Component {
    constructor(props) {
        super(props);
    }

    verify(e) {
        e.preventDefault();
        let username = this.props.location.query.username;
        let token = this.props.location.query.token;
        let payload = {username: username, token: token};
        this.props.verifyActions.verifyEmail(payload);
    }

    componentDidUpdate() {
        if (this.props.verifyState.success) {
            this.props.router.push(HOME_PAGE);
        } else {
            alert("Email Verification failed!!");
        }
    }

    render() {
        return (
            <div className="email-verification">
                <form className="form-horizontal" onSubmit={this.verify.bind(this)}>
                <h3>Email Verification</h3>
                <div className="email-verfication-area">
                    <button type="submit" className="btn btn-raised btn-primary">Verify Email</button>
                </div>
                </form>
            </div>
        );
    }
}

EmailVerification.propTypes = {
    verifyState: PropTypes.object,
    verifyActions: PropTypes.object,
    router: React.PropTypes.shape({
        push: React.PropTypes.func.isRequired
    })
};
export default connect(stateToProps, dispatchToProps)(EmailVerification);