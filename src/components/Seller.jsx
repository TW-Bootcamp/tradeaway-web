import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {logout} from "../actions/LoginActions";

function stateToProps(state) {
    return {
        user: state.user,
        token: this.state.login.authToken
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