import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';
import enrollmentSlice from './features/enrollment/enrollmentSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    enrollment: enrollmentSlice,
  },
});
