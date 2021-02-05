import React, { Component } from 'react'
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <ProductContainer></ProductContainer>
        <MessageContainer></MessageContainer>
        <div class="Title-1 row mt-5">
            <h3>Giỏ hàng</h3>
        </div>
        <CartContainer></CartContainer>
      </div>
    )
  }
}
