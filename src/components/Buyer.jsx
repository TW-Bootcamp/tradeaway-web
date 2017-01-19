import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as categoryActions from "../actions/CategoryActions";
import {logout} from "../actions/LoginActions";
import {ROLE_BUYER} from "../constants/User";


function stateToProps(state) {
    return {
        user: state.user,
        categories: state.categories,
        token: state.login.authToken,
        role: state.login.role
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
        if (!this.props.token || this.props.role !== ROLE_BUYER) {
            this.props.router.push("/");
        }
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
            <div>
                <h3>Welcome Buyer!</h3>

                <select>
                    {this.buyer()}
                </select>
                <br/>
                <button onClick={this.logout.bind(this)}>Logout</button>

            </div>
        );
    }
}

Buyer.propTypes = {
    user: PropTypes.object,
    categories: PropTypes.array
};

export default connect(stateToProps, dispatchToProps)(Buyer);