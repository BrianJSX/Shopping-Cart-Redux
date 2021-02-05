import React, { Component } from 'react';
import CartResult from './CartResult';

class Cart extends Component {
    render() {
        let { children } = this.props;
        let {total} = this.props;
        
        return (
            <div className="col-md-12 mb-5">
                <div className="Card-1 row" style={{ border: '1px solid gray', height: '100%', borderRadius: 20 }}>
                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>TÊN SẢN PHẨM</th>
                                    <th>HÌNH ẢNH </th>
                                    <th>SỐ LƯỢNG</th>
                                    <th>GIÁ</th>
                                    <th>HÀNH ĐỘNG</th>
                                </tr>
                            </thead>
                            <tbody>
                                {children}
                            </tbody>
                        </table>
                    </div>
                </div>
                <CartResult total={total}></CartResult>
            </div>
        );

    };
}

export default Cart;
