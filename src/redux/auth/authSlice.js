import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload
        },
        loginError: (state, action) => {
            state.user = null
        },
        logout: (state, action) => {
            state.user = null
        },
    }
})

export const { loginSuccess, loginError, logout } = authSlice.actions

export default authSlice.reducer