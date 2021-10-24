import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        token: null,
        userId: null
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.token = null;
            state.userId = null;
        }
    }
});

export const { setToken, logout } = loginSlice.actions;
export default loginSlice.reducer;