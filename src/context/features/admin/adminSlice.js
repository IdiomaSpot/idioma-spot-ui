import { createSlice } from '@reduxjs/toolkit';
import { getMenuOption } from '../../../data/adminMenu';

export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    content: getMenuOption('marketing'),
  },
  reducers: {
    changeContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { changeContent, setIsPoints, setSelectedOffer } =
  adminSlice.actions;

export default adminSlice.reducer;
