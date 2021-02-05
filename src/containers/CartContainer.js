import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import {actionDeleteProuduct} from '../actions/index';

class CartContainer extends Component {
    
    render() {
        let {carts} = this.props;

        return (
            <Cart>{this.showCartItem(carts)}</Cart>
        );
    }

    showCartItem = (carts) => {
        let result = null;
        let {onDeleteProduct} = this.props;

        result = carts.map((cart, index) => {
            return <CartItem key={index} cart={cart} onDeleteProduct={onDeleteProduct}></CartItem>
        });
        
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        carts : state.carts
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProduct: (id) => {
            dispatch(actionDeleteProuduct(id));
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)