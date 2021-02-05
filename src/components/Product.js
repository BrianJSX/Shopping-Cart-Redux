import React, { Component } from 'react';
import ProductItem from './ProductItem';

class Product extends Component {
    render() {
        let {products} = this.props;
        return (
            <div className="product-1 row">
                {this.showProductItem(products)}
            </div>
        )
    };

    showProductItem(products){
        let result = null;
        let {onAddToCart}= this.props;
        let {onChangeMessage} = this.props;

        result = products.map((product, index) => {
            return <ProductItem 
            key={index}
            product={product}
            onAddToCart={onAddToCart}
            onChangeMessage={onChangeMessage}
            ></ProductItem>
        });

        return result;
    };

}

export default Product