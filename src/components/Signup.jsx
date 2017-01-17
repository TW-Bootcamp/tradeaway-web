import React, { Component } from 'react';
import '../styles/Login.css';

class Login extends Component {
  render() {
    return (
      <div className="login-box">
        <div className="form-signin">
          <h2 className="form-signin-heading">New User Registration</h2>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Cancel</button>
        </div>
      </div>
    );
  }
}

export default Login;
