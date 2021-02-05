import { combineReducers } from "redux";
import products from "./product";
import carts from "./cart";
import messages from './message';

const appReducer = combineReducers({
    products,
    carts,
    messages
}); 

export default appReducer;