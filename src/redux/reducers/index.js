import { combineReducers } from "redux";
import productModalSlice from "../product-modal/productModalSlice";
import cartItemsSlice from "../shopping-cart/cartItemsSlice";
import authSlice from "../auth/authSlice";

const rootReducer = combineReducers({
    productModalSlice,
    cartItemsSlice,
    authSlice,
})

export default rootReducer