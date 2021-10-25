import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk('login/login', async (action) => {
    // TODO fix axios call and add error handling
    console.log(action);
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return data;
})

export const register = createAsyncThunk('login/register', async (action) => {
    // TODO fix axios call and add error handling
    console.log(action);
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return data;
})

const loginSlice = createSlice({
    name: "login",
    initialState: {
        // TODO use localStorage to inform initialState
        token: null,
        userId: null
    },
    reducers: {
        logout: (state) => {
            return {
                token: null,
                userId: null
            };
        }
    },
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            // TODO change token and userId based on data
            console.log(action);
            return state;
        }).addCase(register.fulfilled, (state, action) => {
            // TODO change token and userId based on data
            console.log(action);
            return state;
        })
    }
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;