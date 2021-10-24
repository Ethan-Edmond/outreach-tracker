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
        }
    }
});

export const { setToken } = loginSlice.actions;
export default loginSlice.reducer;