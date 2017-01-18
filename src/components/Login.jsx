import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../styles/Login.css';

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
        let payload = {email: this.refs.email.value, password: this.refs.password.value};
        this.props.loginActions.login(payload);
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.loginState.success) {
            alert("Invalid username,password!");
        }
    }

    render() {
        return (
            <div className="login-box">
                <form className="form-horizontal" onSubmit={this.login.bind(this)}>
                    <h2 className="text-center"> Welcome to TradeAway </h2>
                    <div className="login-section">Existing User :</div>
                    <div className="form-group">
                        <label htmlFor="inputEmail" className="col-md-2 control-label">Email</label>
                        <div className="col-md-10">
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email"
                                   ref="email" required="required"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword" className="col-md-2 control-label">Password</label>
                        <div className="col-md-10">
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
    loginActions: PropTypes.object
};
export default connect(stateToProps, dispatchToProps)(Login);
