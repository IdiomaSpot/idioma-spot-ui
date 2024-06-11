import { createSlice } from '@reduxjs/toolkit';

export const studentSlice = createSlice({
  name: 'student',
  initialState: {
    isPoints: 0,
    selectedOffer: null,
  },
  reducers: {
    setIsPoints: (state, action) => {
      state.isPoints = action.payload || null;
    },
    setSelectedOffer: (state, action) => {
      state.selectedOffer = action.payload;
    },
  },
});

export const { setIsPoints, setSelectedOffer } = studentSlice.actions;

export default studentSlice.reducer;
