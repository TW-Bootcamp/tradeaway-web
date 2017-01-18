import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ROLE_BUYER, ROLE_SELLER} from '../constants/User';
import {BUYER_LANDING_PAGE, SELLER_LANDING_PAGE} from '../constants/Route';

import * as loginActions from '../actions/LoginActions'


function stateToProps(state) {
    return {
        loginState: state.login
    };
}

function dispatchToProps(dispatch) {
    return {
        loginActions: bindActionCreators(loginActions, dispatch),
    };
}

export class Login extends Component {
    constructor(props) {
        super(props);
    }

    login(e) {
        e.preventDefault();
        let payload = {username: this.refs.username.value, password: this.refs.password.value};
        this.props.loginActions.login(payload);
    }

    componentDidUpdate() {
        if (this.props.loginState.success) {
            switch (this.props.loginState.role) {
                case ROLE_SELLER:
                    this.props.router.push(SELLER_LANDING_PAGE);
                    break;
                case ROLE_BUYER:
                    this.props.router.push(BUYER_LANDING_PAGE);
            }
        }
    }

    errMessage() {
        return (
            <div className="alert alert-dismissible alert-danger" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4>Error!</h4>
                <p>Either your username/password is incorrect or email is not verified!</p>
            </div>
        );
    }

    render() {
        return (
            <div className="login-box">
                <form className="form-horizontal" onSubmit={this.login.bind(this)}>
                    <h2 className="text-center">Welcome to TradeAway</h2>
                    {this.props.loginState.success === false ? this.errMessage() : ""}
                    <div className="login-section">Existing User :</div>
                    <div className="form-group">
                        <label htmlFor="inputEmail" className="col-md-4 control-label">Username</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" id="inputEmail" placeholder="Username"
                                   ref="username" required="required"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword" className="col-md-4 control-label">Password</label>
                        <div className="col-md-8">
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password"
                                   ref="password" required="required"/>
                        </div>
                    </div>
                    <div className="login-button-area">
                        <button type="submit" className="btn btn-raised btn-primary">Login</button>
                    </div>
                </form>
                <div className="login-section">New User :</div>
                <Link to="/signup" className="btn btn-raised btn-primary sign-up">New User Registration</Link>
            </div>
        );
    }
}
Login.propTypes = {
    loginState: PropTypes.object,
    loginActions: PropTypes.object,
    router: React.PropTypes.shape({
        push: React.PropTypes.func.isRequired
    })
};
export default connect(stateToProps, dispatchToProps)(Login);
