import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';
import enrollmentSlice from './features/enrollment/enrollmentSlice';
import studentSlice from './features/student/studentSlice';
import adminSlice from './features/admin/adminSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    enrollment: enrollmentSlice,
    student: studentSlice,
    admin: adminSlice,
  },
});
