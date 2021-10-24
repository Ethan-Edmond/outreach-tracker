import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        token: null,
        userId: null
    },
    reducers: {
        setToken: (state, action) => {
            return {
                ...state,
                token: action.payload
            }
        },
        logout: (state) => {
            return {
                token: null,
                userId: null
            }
        }
    }
});

export const { setToken, logout } = loginSlice.actions;
export default loginSlice.reducer;