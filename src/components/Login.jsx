import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/Login.css';

class Login extends Component {
  render() {
    return (
      <div className="login-box">
        <form className="form-horizontal">
          <h2 className="text-center"> Welcome to TradeAway </h2>
          <div className="login-section">Existing User :</div>
            <div className="form-group">
              <label htmlFor="inputEmail" className="col-md-2 control-label">Email</label>
              <div className="col-md-10">
                <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword" className="col-md-2 control-label">Password</label>
              <div className="col-md-10">
                <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
              </div>
            </div>
          <div className="login-button-area">
          <a href="javascript:void(0)" className="btn btn-raised btn-primary">Login</a>
          </div>
        </form>
        <div className="login-section">New User :</div>
        <Link to="/signup" className="btn btn-raised btn-primary sign-up">New User Registration</Link>
      </div>
    );
  }
}

export default Login;
