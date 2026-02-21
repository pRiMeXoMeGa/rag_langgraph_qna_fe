import { configureStore } from '@reduxjs/toolkit';
import ragReducer from './slices/ragSlice';

export const store = configureStore({
  reducer: {
    rag: ragReducer,
  },
})