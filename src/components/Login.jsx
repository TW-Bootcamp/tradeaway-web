import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="login-box">
        <form onSubmit={this.onSubmit} className="form-horizontal">
          <h2 className="text-center"> Welcome to TradeAway </h2>
          <div className="login-section">Existing User :</div>
            <div className="form-group">
              <label htmlFor="inputEmail" className="col-md-4 control-label">Email</label>
              <div className="col-md-8">
                <input type="text" className="form-control" id="username" placeholder="username" name="username"
                       value={this.state.username} onChange={this.onChange} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword" className="col-md-4 control-label">Password</label>
              <div className="col-md-8">
                <input type="password" className="form-control" id="inputPassword" placeholder="Password"
                value={this.state.password} name="password" onChange={this.onChange}/>
              </div>
            </div>
          <div className="login-button-area">
            <button className="btn btn-raised btn-primary">Login</button>
          </div>
        </form>
        <div className="login-section">New User :</div>
        <Link to="/signup" className="btn btn-raised btn-primary sign-up">New User Registration</Link>
      </div>
    );
  }
}

export default Login;
