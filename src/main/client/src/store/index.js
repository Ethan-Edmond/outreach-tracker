import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginReducer';
import jobReducer from './jobReducer';
import thunk from 'redux-thunk';

export default configureStore({
    reducer: {
        login: loginReducer,
        jobs: jobReducer
    },
    middleware: [thunk]
});