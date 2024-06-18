import { createSlice } from '@reduxjs/toolkit';
import { getMenuOption } from '../../../data/studentsMenu';

export const studentSlice = createSlice({
  name: 'student',
  initialState: {
    isPoints: 0,
    selectedOffer: null,
    content: getMenuOption('home'),
  },
  reducers: {
    setIsPoints: (state, action) => {
      state.isPoints = action.payload || null;
    },
    setSelectedOffer: (state, action) => {
      state.selectedOffer = action.payload;
    },
    changeContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { changeContent, setIsPoints, setSelectedOffer } =
  studentSlice.actions;

export default studentSlice.reducer;
