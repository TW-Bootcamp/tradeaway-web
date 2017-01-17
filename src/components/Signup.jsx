import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/Signup.css';

class Login extends Component {
  render() {
    return (
      <div className="signup-box">
          <h2 className="form-signup-heading">New User Registration</h2>
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="inputName" className="col-md-4 control-label">Name</label>
            <div className="col-md-8">
              <input type="text" className="form-control" id="inputName" placeholder="Name" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail" className="col-md-4 control-label">Email Id</label>
            <div className="col-md-8">
              <input type="email" className="form-control" id="inputEmail" placeholder="email" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputUsername" className="col-md-4 control-label">Username</label>
            <div className="col-md-8">
              <input type="text" className="form-control" id="inputUsername" placeholder="username" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword" className="col-md-4 control-label">Password</label>
            <div className="col-md-8">
              <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputConfirmPassword" className="col-md-4 control-label">Confirm Password</label>
            <div className="col-md-8">
              <input type="password" className="form-control" id="inputConfirmPassword" placeholder="Confirm Password" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress" className="col-md-4 control-label">Address</label>
            <div className="col-md-8">
              <input type="text" className="form-control" id="inputAddress" placeholder="Address" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputMobile" className="col-md-4 control-label">Mobile</label>
            <div className="col-md-8">
              <input type="text" className="form-control" id="inputMobile" placeholder="Mobile"/>
            </div>
          </div>
          <div className="sign-up-button-area">
            <button className="btn btn-raised btn-primary" type="submit">Submit</button>
            <Link to="/" className="btn btn-raised btn-primary">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
