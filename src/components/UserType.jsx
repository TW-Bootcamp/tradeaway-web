import React, { Component } from 'react';
import BuyerField from './BuyerField';
import SellerField from './SellerField';

class UserType extends Component {
    render() {
        return (
            <div>
                {this.props.type === "buyer" ?  <BuyerField ref="buyer"></BuyerField> : <SellerField ref="seller"></SellerField> }
            </div>
            );
    }
}

export default UserType;