import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const store = configureStore({
  reducer: authReducer,
});

export type RootState = ReturnType<typeof authReducer>;

export default store;
