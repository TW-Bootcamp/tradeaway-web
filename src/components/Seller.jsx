import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

function stateToProps(state) {
    return {
        user: state.user
    };
}

function dispatchToProps(dispatch) {
    return {};
}

export class Seller extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Welcome!</h3>
            </div>
        );
    }
}

Seller.propTypes = {
    user: PropTypes.object
};
export default connect(stateToProps, dispatchToProps)(Seller);