import { createSlice } from '@reduxjs/toolkit';
import { CLASS_TYPE } from '../../../data/constants';

export const enrollmentSlice = createSlice({
  name: 'enrollment',
  initialState: {
    classType: CLASS_TYPE.ONLIVE,
    classScheduleId: null,
    payment: {},
  },
  reducers: {
    setClassType: (state, action) => {
      state.classType = action.payload.classType || null;
    },
    setClassScheduleId: (state, action) => {
      state.classScheduleId = action.payload.classScheduleId || null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setClassType, setClassScheduleId } = enrollmentSlice.actions;

export default enrollmentSlice.reducer;
