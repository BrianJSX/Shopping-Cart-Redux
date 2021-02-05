import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import {actionDeleteProuduct, onChangeMessage} from '../actions/index';

class CartContainer extends Component {

    showCartItem = (carts) => {
        let result = null;
        let {onDeleteProduct} = this.props;
        let {onChangeMessage} = this.props;

        result = carts.map((cart, index) => {
            return <CartItem 
            key={index}
            onChangeMessage={onChangeMessage} 
            cart={cart} 
            onDeleteProduct={onDeleteProduct}
            >
            </CartItem>
        });
        
        return result;
    }

    showTotal = (carts) => {
        let total = 0;
        for (let i = 0; i < carts.length; i++) {
            total += carts[i].quantity*carts[i].product.price;
        }
        return total;
    }

    render() {
        let {carts} = this.props;
        let total = this.showTotal(carts);
        return (
            <Cart 
            total={total}
            >{this.showCartItem(carts)}
            </Cart>
        );
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
        },
        onChangeMessage: (message) => {
            dispatch(onChangeMessage(message));
        }
        
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)