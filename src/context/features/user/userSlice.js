import { createSlice } from '@reduxjs/toolkit';

const user = JSON.parse(localStorage.getItem('user'));
const token = localStorage.getItem('access_token');
const randomColor = localStorage.getItem('bgcolor');

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    access_token: token || null,
    id: user?.id || null,
    name: user?.name || null,
    surname: user?.surname || null,
    phone: user?.phone || null,
    email: user?.email || null,
    role: user?.role || null,
    color: randomColor || null,
  },
  reducers: {
    saveToken: (state, action) => {
      state.access_token = action.payload;
      localStorage.setItem('access_token', action.payload);
    },
    saveUser: (state, action) => {
      state.id = action.payload.id || null;
      state.name = action.payload.name || '';
      state.surname = action.payload.surname || '';
      state.phone = action.payload.phone || '';
      state.email = action.payload.email;
      state.role = action.payload.role;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    saveUserColor: (state, action) => {
      state.color = action.payload;
      localStorage.setItem('bgcolor', action.payload);
    },
    resetUser: (state) => {
      state.access_token = null;
      state.id = null;
      state.name = null;
      state.surname = null;
      state.phone = null;
      state.email = null;
      state.role = null;
      localStorage.clear();
    },
  },
});

export const { saveToken, saveUser, saveUserColor, resetUser } =
  userSlice.actions;
export default userSlice.reducer;
