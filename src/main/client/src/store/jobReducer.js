import { createSlice } from "@reduxjs/toolkit";

export const jobSlice = createSlice({
    name: jobs,
    initialState: [],
    reducers: {
        initialize: (state, action) => {
            // action payload should be a userId,
            // axios.get('/jobs')
            //   .then(res => {
            //     return state.concat(res.data.jobs)
            //   })
            //   .catch(err => actually handle error)
            return [...state, action.payload];
        }
    }
})

export const { initialize } = jobSlice.actions;
export default jobSlice.reducers;