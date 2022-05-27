import { combineReducers } from "redux";
import productModalSlice from "../product-modal/productModalSlice";
import cartItemsSlide from "../shopping-cart/cartItemsSlide";
import authSlice from "../auth/authSlice";

const rootReducer = combineReducers({
    productModalSlice,
    cartItemsSlide,
    authSlice,
})

export default rootReducer