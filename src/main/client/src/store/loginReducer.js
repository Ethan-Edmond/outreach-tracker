import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        token: null,
        userId: null
    },
    reducers: {
        login: (state, action) => {
            console.log("AAAAAA")
            return state;
        },
        register: (state) => state,
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

export const { setToken, logout, login, register } = loginSlice.actions;
export default loginSlice.reducer;