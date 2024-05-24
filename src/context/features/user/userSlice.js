import { createSlice } from '@reduxjs/toolkit';

const user = sessionStorage.getItem('user');
const token = sessionStorage.getItem('token');

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: token || null,
    user: {
      name: user?.name || '',
      surname: user?.surname || '',
      phone: user?.phone || '',
      email: user?.email || '',
    },
  },
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload;
    },
    saveUser: (state, action) => {
      state.user.name = action.payload.name || '';
      state.user.surname = action.payload.surname || '';
      state.user.phone = action.payload.phone || '';
      state.user.email = action.payload.email;
      state.user.role = action.payload.role;
    },
    resetUser: (state) => {
      state.user.name = '';
      state.user.surname = '';
      state.user.email = '';
      state.user.phone = '';
      state.user.role = '';
    },
  },
});

export const { saveToken, saveUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
