import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../_features/userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});