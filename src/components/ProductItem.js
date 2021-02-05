import React, { Component } from 'react';
import* as Message from '../contants/Message';
class ProductItem extends Component {

    render() {
        let {product} = this.props;
        return (
            <div className="product__content col-md-3 m-1">
                <div className="card" style={{ width: '18rem' }}>
                    <img className="card-img-top" src={product.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.price}</p>
                        <a onClick={ () => this.onAddToCart(product) } className="btn btn-primary">Mua</a>
                    </div>
                </div>
            </div>
        );
    }

    onAddToCart = (product) =>{
        this.props.onAddToCart(product);
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    }
}

export default ProductItem;
