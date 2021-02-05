import React, { Component } from 'react';

class CartItem extends Component {

    render() {
        let { cart } = this.props;
        return (
            <tr>
                <td>{cart.product.id}</td>
                <td>{cart.product.name}</td>
                <td>
                    <img src={cart.product.image} width="120px" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>
                </td>
                <td>{cart.quantity}</td>
                <td>{cart.product.price*cart.quantity}</td>
                <td>
                    <button type="button" class="btn btn-primary">Sửa</button>
                    <button onClick={ () => this.onDeleteProduct(cart.product.id)} type="button" class="btn btn-danger ml-2">Xóa</button>
                </td>
            </tr>
        );
    }

    onDeleteProduct = (id) => {
        this.props.onDeleteProduct(id);
    }
    
}

export default CartItem;
