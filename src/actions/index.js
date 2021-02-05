import * as Types from '../contants/ActionTypes';

export const actionAddCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actionDeleteProuduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT_CART,
        id
    }
}

export const onChangeMessage = (message) => {
    return {
        type: Types.CHANGE_MESSAGE,
        message
    }
}