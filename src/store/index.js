// Combine multiple reducers into one store (Redux Toolkit)
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import userReducer from './userSlice';

// configureStore automatically combines reducers when you pass an object
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
