import { combineReducers } from "redux";
import basketReducers from "./basketReducers";
import productsReducer from "./products";

export default combineReducers({
  basket: basketReducers,
  products: productsReducer,
});
