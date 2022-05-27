import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
}

const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload
            const { cartItems } = state

            const found = cartItems.findIndex((cartItem) => cartItem.slug === newItem.slug)
            if (found === -1) {
                cartItems.push(newItem)
            } else {
                cartItems[found].quantity += 1
            }
        },
        decreaseItem: (state, action) => {
            const selectedItem = action.payload
            const { cartItems } = state

            const found = cartItems.findIndex((cartItem) => cartItem.slug === selectedItem.slug)
            if (selectedItem.quantity === 1) {
                cartItems.splice(found, 1)
            } else {
                cartItems[found].quantity -= 1
            }
        },
        removeItem: (state, action) => {
            const selectedItem = action.payload
            const { cartItems } = state

            const found = cartItems.findIndex((cartItem) => cartItem.slug === selectedItem.slug)
            cartItems.splice(found, 1)
        },
        removeAllItems: (state, action) => {
            state.cartItems = []
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    addItem,
    removeItem,
    decreaseItem,
    removeAllItems
} = cartItemsSlice.actions

export default cartItemsSlice.reducer