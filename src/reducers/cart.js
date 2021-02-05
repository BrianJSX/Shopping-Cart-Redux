import * as Types from '../contants/ActionTypes';
import _ from 'lodash';

let initialState = [];

const carts = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_TO_CART:
            if(state.length > 0){
                for (let index = 0; index < state.length; index++) {
                    if (state[index].product.id == action.product.id) {
                        state[index].quantity += 1;
                        return [...state];
                    }
                }
            }
            state.push(action);
            return [...state];
        case Types.DELETE_PRODUCT_CART:
            let indexArr = _.findIndex(state,function(o) { return o.product.id == action.id; });
            state.splice(indexArr, 1);
            return [...state];
        default:
            return [...state];
    }
}

export default carts;