import { createSlice } from '@reduxjs/toolkit';

const user = JSON.parse(sessionStorage.getItem('user'));
const token = sessionStorage.getItem('token');
const randomColor = sessionStorage.getItem('bgcolor');

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: token || null,
    name: user?.name || null,
    surname: user?.surname || null,
    phone: user?.phone || null,
    email: user?.email || null,
    color: randomColor || null,
  },
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload;
    },
    saveUser: (state, action) => {
      state.name = action.payload.name || '';
      state.surname = action.payload.surname || '';
      state.phone = action.payload.phone || '';
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
    saveUserColor: (state, action) => {
      state.color = action.payload;
    },
    resetUser: (state) => {
      state.token = null;
      state.name = null;
      state.surname = null;
      state.phone = null;
      state.email = null;
    },
  },
});

export const { saveToken, saveUser, saveUserColor, resetUser } =
  userSlice.actions;
export default userSlice.reducer;
