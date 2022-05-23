import { combineReducers } from "redux";
import productModalSlice from "../product-modal/productModalSlice";
import cartItemsSlide from "../shopping-cart/cartItemsSlide";

const rootReducer = combineReducers({
    productModalSlice: productModalSlice,
    cartItems: cartItemsSlide,
})

export default rootReducer