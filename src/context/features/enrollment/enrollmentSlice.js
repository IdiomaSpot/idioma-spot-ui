import { createSlice } from "@reduxjs/toolkit";

export const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState: {
    classType: null,
    classSchedule: null,
    preferenceId: null,
    classScheduleChanged: false,
  },
  reducers: {
    setClassType: (state, action) => {
      const changed = state.classType !== action.payload.classType;
      state.classSchedule = changed ? null : state.classSchedule;
      state.classType = action.payload.classType || null;
    },
    setClassSchedule: (state, action) => {
      state.classScheduleChanged =
        state.classSchedule?.id !== action.payload.classSchedule.id;
      state.classSchedule = action.payload.classSchedule || null;
    },
    setPreferenceId: (state, action) => {
      state.preferenceId = action.payload.preferenceId || null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setClassType, setClassSchedule, setPreferenceId } =
  enrollmentSlice.actions;

export default enrollmentSlice.reducer;
