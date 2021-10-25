import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginReducer';
import jobReducer from './jobReducer';

export default {
    login: loginReducer,
    jobs: jobReducer
};