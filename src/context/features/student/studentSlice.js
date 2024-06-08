import { createSlice } from '@reduxjs/toolkit';

export const studentSlice = createSlice({
  name: 'student',
  initialState: {
    isPoints: 0,
  },
  reducers: {
    setIsPoints: (state, action) => {
      state.isPoints = action.payload || null;
    },
  },
});

export const { setIsPoints } = studentSlice.actions;

export default studentSlice.reducer;
