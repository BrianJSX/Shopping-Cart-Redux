import React, { Component } from 'react';

class CartResult extends Component {

    render() {
        let {total} = this.props;
        return (
            <div className="row">
                <div className="col-md-8">
                </div>
                <div className="col-md-4 row mt-2">
                    <div className="col-md-4">
                        <b>Tổng tiền</b>
                    </div>
                    <div className="col-md-4">
                        {total}
                    </div>
                    <div className="col-md-4">
                        <button type="button" className="btn btn-primary">Thanh toán</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default CartResult;
