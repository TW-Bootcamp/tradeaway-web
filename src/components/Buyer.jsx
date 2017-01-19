import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../actions/CategoryActions';

function stateToProps(state) {
    return {
        user: state.user,
        categories : state.categories,
        token:state.login.authToken
    };
}

function dispatchToProps(dispatch) {
    return {
        categoryActions: bindActionCreators(categoryActions, dispatch),
    };
}

export class Buyer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: this.props.categories
        }
    }

    componentDidMount(){
        this.props.categoryActions.loadCategories(this.props.token);
    }

    render() {

        return (
            <div>
                <h3>Welcome Buyer!</h3>

                <select>
                    {
                        this.props.categories.map(function (c) {
                            return <option key={c.id}
                                           value={c.name}>{c.name}</option>;
                        })
                    }
                </select>

            </div>
        );
    }
}

Buyer.propTypes = {
    user: PropTypes.object,
    categories: PropTypes.array
};

export default connect(stateToProps, dispatchToProps)(Buyer);