import * as Types from '../contants/ActionTypes';
import * as Message from '../contants/Message';
import _ from 'lodash';

let initialState = [
    {
        message: Message.MSG_WELCOME
    }
];

const message = (state = initialState, action ) => {
    switch (action.type) {
        case Types.CHANGE_MESSAGE:
            if(state.length > 0){
                state = [];
                state.push(action);
            }
            return [...state];
        default:
            return [...state];
    }
}

export default message;