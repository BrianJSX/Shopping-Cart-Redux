import React, { Component } from 'react'
import { connect } from "react-redux";
import Product from '../components/Product';
import {actionAddCart, onChangeMessage} from '../actions/index';

class ProductContainer extends Component {

    render() {
        
        let {products} = this.props;
        let {onAddToCart} = this.props;
        let {onChangeMessage} = this.props;

        return (
            <Product 
            products={products}
            onAddToCart={onAddToCart}
            onChangeMessage={onChangeMessage}
            >
            </Product>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actionAddCart(product, 1));
        },
        onChangeMessage: (message) => {
            dispatch(onChangeMessage(message));
        }
    }
   
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductContainer)