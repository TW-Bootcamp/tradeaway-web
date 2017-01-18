import React, { Component } from 'react';
import BuyerField from './BuyerField';
import SellerField from './SellerField';

class UserType extends Component {
    render() {
        return (
            <div>
                {this.props.type === "Buyer" ?  <BuyerField></BuyerField> : <SellerField></SellerField> }
            </div>
            );
    }
}

export default UserType;