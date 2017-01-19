import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as categoryActions from "../actions/CategoryActions";
import {logout} from "../actions/LoginActions";


function stateToProps(state) {
    return {
        user: state.user,
        categories: state.categories,
        token: state.login.authToken
    };
}

function dispatchToProps(dispatch) {
    return {
        categoryActions: bindActionCreators(categoryActions, dispatch),
        logout: bindActionCreators(logout, dispatch),
    };
}

export class Buyer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: this.props.categories
        }
    }

    componentDidMount() {
        this.props.categoryActions.loadCategories(this.props.token);
    }

    componentDidUpdate() {
        if (!this.props.token) {
            this.props.router.push("/");
        }
    }

    logout() {
        this.props.logout();
    }

    buyer() {

        return this.props.categories.length ? this.props.categories.map(function (c) {
                return <option key={c.id}
                               value={c.name}>{c.name}</option>;
            }) : "";
    }

    render() {

        return (
            <div className="buyer-categories-box">
                <h3>Welcome Buyer!</h3>
                <br/>
                <button onClick={this.logout.bind(this)}>Logout</button>

                <form className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="s1" className="col-md-4 control-label">Category</label>
                    <div className="col-md-8">
                    <select id="s1" className="form-control">
                        <option value={-1}>Select Category</option>
                        {this.buyer()}
                    </select>
                    </div>
                </div>
                </form>

            </div>
        );
    }
}

Buyer.propTypes = {
    user: PropTypes.object,
    categories: PropTypes.array
};

export default connect(stateToProps, dispatchToProps)(Buyer);