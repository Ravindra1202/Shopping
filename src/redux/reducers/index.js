import { combineReducers } from "redux";
import {productsReducer , selectedProductsReducer} from '../reducers/productReducers'
export const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProductsReducer,
  });