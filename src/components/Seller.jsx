import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {logout} from "../actions/LoginActions";
import {ROLE_SELLER} from "../constants/User";

function stateToProps(state) {
    return {
        user: state.user,
        token: state.login.authToken,
        role: state.login.role
    };
}

function dispatchToProps(dispatch) {
    return {
        logout: bindActionCreators(logout, dispatch),
    };
}

export class Seller extends Component {
    constructor(props) {
        super(props);
    }

    logout() {
        this.props.logout();
        this.props.router.push("/");
    }

    componentDidMount() {
        if (!this.props.token || this.props.role !== ROLE_SELLER) {
            this.props.router.push("/");
        }
    }

    componentDidUpdate() {
        if (!this.props.token) {
            this.props.router.push("/");
        }
    }

    render() {
        return (
            <div>
                <h3>Welcome Seller!</h3>
                <br/>
                <button onClick={this.logout.bind(this)}>Logout</button>
            </div>
        );
    }
}

Seller.propTypes = {
    user: PropTypes.object,
    router: React.PropTypes.shape({
        push: React.PropTypes.func.isRequired
    })
};
export default connect(stateToProps, dispatchToProps)(Seller);