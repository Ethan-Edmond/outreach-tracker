import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginReducer';
import jobReducer from './jobReducer';

export default configureStore({
    reducer: {
        login: loginReducer,
        jobs: jobReducer
    }
});