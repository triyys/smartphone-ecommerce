import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  totalPrice: 0,
  totalItems: 0,
};

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const duplicate = state.value.filter((e) => e.slug === newItem.slug);
      if (duplicate.length > 0) {
        state.value = state.value.filter((e) => e.slug !== newItem.slug);
        state.value = [
          ...state.value,
          {
            name: newItem.name,
            discountedPrice: newItem.discountedPrice,
            slug: newItem.slug,
            price: newItem.price,
            quantity: duplicate[0].quantity + 1,
            image01: duplicate[0].image01,
          },
        ];
      } else {
        state.value = [
          ...state.value,
          {
            ...action.payload,
          },
        ];
      }

      state.totalPrice +=
        Number(newItem.quantity) * Number(newItem.discountedPrice);
      state.totalItems += Number(newItem.quantity);
    },
    decreaseItem: (state, action) => {
      const newItem = action.payload;
      if (newItem.quantity === 1) {
        state.value = state.value.filter((e) => e.slug !== newItem.slug);
      } else {
        const idx = state.value.findIndex((e) => e.slug === newItem.slug);
        console.log(idx);
        state.value[idx].quantity -= 1;
        state.totalPrice -= Number(newItem.discountedPrice);
        state.totalItems -= 1;
      }
    },
    removeItem: (state, action) => {
      // const item = action.payload;
      const rm = state.value.findIndex((e) => e.slug === action.payload);
      state.totalPrice -=
        state.value[rm].quantity * state.value[rm].discountedPrice;
      state.totalItems -= state.value[rm].quantity;
      console.log("rm: ", rm);
      state.value = state.value.filter((e) => e.slug !== action.payload);
    },
    removeAllItems: (state, action) => {
      state.value = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addItem,
  removeItem,
  decreaseItem,
  removeAllItems
} = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
