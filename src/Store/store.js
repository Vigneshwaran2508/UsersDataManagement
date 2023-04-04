import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Component/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
