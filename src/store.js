import { configureStore } from '@reduxjs/toolkit';
import queryReducer from './slice/querySlice';

export default configureStore({
  reducer: {
    query: queryReducer,
  }
});
