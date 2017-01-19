import React, { Component } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import UserType from './UserType';
import {bindActionCreators} from 'redux';
import * as signupActions from '../actions/SignupActions'
import {INDEX_ROUTE} from '../constants/Route';
import '../styles/Signup.css';


function stateToProps(state) {
  return {
    signupState: state.signup
  };
}

function dispatchToProps(dispatch) {
  return {
    signupActions: bindActionCreators(signupActions, dispatch),
  };
}

class Signup extends Component {

  constructor(props){
    super(props);
    this.state = {type: "buyer"};
  }

  signup(e){
    e.preventDefault();
    let payload = {};

    for (var ref in this.refs) {
      payload[ref] = this.refs[ref].value;
    }
    delete payload.usertype;
    if(this.state.type === "buyer"){
      payload.authority = "role_buyer";
      let buyer = this.refs.usertype.refs.buyer;
      payload.gender = buyer.refs.gender.value;
      payload.dob = `${buyer.refs.year.value}-${buyer.refs.month.value}-${buyer.refs.day.value}`;
    }

    if(this.state.type === "seller"){
      payload.authority = "role_seller";
      let seller = this.refs.usertype.refs.seller;
      payload.pan = seller.refs.pan.value;
      payload.experienceInMonths = seller.refs.experienceInMonths.value;
      payload.experienceInYears = seller.refs.experienceInYears.value;
    }

    this.props.signupActions.signup(payload);
  }

  selectType(e){
    this.setState({type: e.target.value});
  }

  render() {
    return (
      <div className="signup-box">
          <h2 className="form-signup-heading">New User Registration</h2>
        <div className={this.props.signupState.success === true ? "show": "hide"}>
          <h3> Authenticated Successfully. <Link to={INDEX_ROUTE}> Click here to go to login page </Link></h3>
        </div>
        <form className="form-horizontal" onSubmit={this.signup.bind(this)}>
          <div className="form-group required">
            <label htmlFor="inputName" className="col-md-4 control-label">Name</label>
            <div className="col-md-8">
              <input ref="name" type="text" className="form-control" id="inputName" placeholder="Name" required="required" />
            </div>
          </div>
          <div className="form-group required">
            <label htmlFor="inputEmail" className="col-md-4 control-label">Email Id</label>
            <div className="col-md-8">
              <input ref="email" type="email" className="form-control" id="inputEmail" placeholder="email" required="required"/>
            </div>
          </div>
          <div className="form-group required">
            <label htmlFor="inputUsername" className="col-md-4 control-label">Username</label>
            <div className="col-md-8">
              <input ref="username" type="text" className="form-control" id="inputUsername" placeholder="username" required="required"/>
            </div>
          </div>
          <div className="form-group required">
            <label htmlFor="inputPassword" className="col-md-4 control-label">Password</label>
            <div className="col-md-8">
              <input ref="password" type="password" className="form-control" id="inputPassword" placeholder="Password" required="required"/>
            </div>
          </div>
          <div className="form-group required">
            <label htmlFor="inputConfirmPassword" className="col-md-4 control-label">Confirm Password</label>
            <div className="col-md-8">
              <input type="password" className="form-control" id="inputConfirmPassword" placeholder="Confirm Password" required="required"/>
            </div>
          </div>
          <div className="form-group required">
            <label htmlFor="inputAddress" className="col-md-4 control-label">Address</label>
            <div className="col-md-8">
              <input ref="address" type="text" className="form-control" id="inputAddress" placeholder="Address" required="required"/>
            </div>
          </div>
          <div className="form-group required">
            <label htmlFor="inputMobile" className="col-md-4 control-label">Mobile</label>
            <div className="col-md-8">
              <input ref="mobile" type="text" className="form-control" id="inputMobile" placeholder="Mobile" required="required"/>
            </div>
          </div>
          <div className="form-group required">
            <label htmlFor="inputType" className="col-md-4 control-label">Type</label>
            <div className="col-md-8">
              <select ref="authority" id="inputType" className="form-control" required="required" onChange={this.selectType.bind(this)}>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
          </div>
          <UserType ref="usertype" type={this.state.type}></UserType>
          <div className="sign-up-button-area">
            <div className="required-label">Mandatory fields</div>
            <div>
              <button className="btn btn-raised btn-primary" type="submit">Submit</button>
              <Link to={INDEX_ROUTE} className="btn btn-raised btn-primary">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(stateToProps, dispatchToProps)(Signup);
