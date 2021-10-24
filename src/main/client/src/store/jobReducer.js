import { createSlice } from "@reduxjs/toolkit";

export const jobSlice = createSlice({
    name: "jobs",
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
        },
        add: (state, action) => {
            // axios.post('/jobs')
            // .then(res => blablabla)
            // .catch(err => blablabla)
            return [...state, action.payload];
        },
        edit: (state, action) => {
            // axios call, then set state
            // axios.put('/jobs/{action.payload.id}')
            //   .then(res => bla bla bla change state)
            //   .catch(err => bla bla bla handle error)
            // the payload should be the changed job, which should have an Id property
            return state.map((job) => {
                if (job.id === action.payload.id) {
                    return {
                        ...job,
                        ...action.payload
                    };
                } else {
                    return job;
                }
            })
        },
        remove: (state, action) => {
            // TODO get this working off axios and updating backend
            return state.filter((job) => {
                return job.id === action.payload;
            })
        }
    }
})

export const { initialize, add, edit, remove } = jobSlice.actions;
export default jobSlice.reducer;