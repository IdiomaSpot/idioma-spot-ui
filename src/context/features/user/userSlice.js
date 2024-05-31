import { createSlice } from '@reduxjs/toolkit';

const user = sessionStorage.getItem('user');
const token = sessionStorage.getItem('token');

const initialUserData = () => {
  return user
    ? {
        name: user?.name || '',
        surname: user?.surname || '',
        phone: user?.phone || '',
        email: user?.email || '',
      }
    : null;
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJzdXJuYW1lIjoiYWRtaW4iLCJpZCI6MSwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJlbWFpbEBlbWFpbC5jb20iLCJpYXQiOjE3MTcwMTQ2MTksImV4cCI6MTcxNzA1NzgxOX0._XGLrTylIiOGY7qKoXSsie9B1FyOKlUFtvECWiuHVD0',
    data: initialUserData(),
  },
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload;
    },
    saveUser: (state, action) => {
      state.data.name = action.payload.name || '';
      state.data.surname = action.payload.surname || '';
      state.data.phone = action.payload.phone || '';
      state.data.email = action.payload.email;
      state.data.role = action.payload.role;
    },
    resetUser: (state) => {
      state.data = null;
      state.token = null;
    },
  },
});

export const { saveToken, saveUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
