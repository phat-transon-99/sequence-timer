import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  startDuration: 0,
  duration: 0,
  progress: 0,
  hasStarted: false,
  hasStopped: false,
};

const runTimerSlice = createSlice({
  name: 'runTimers',
  initialState,
  reducers: {
    setStarted: (state, action: PayloadAction<boolean>) => {
      state.hasStarted = action.payload;
    },
    setStopped: (state, action: PayloadAction<boolean>) => {
      state.hasStopped = action.payload;
    },
    setStartDuration: (state, action: PayloadAction<number>) => {
      state.startDuration = action.payload;
      state.duration = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
      state.progress = 1 - state.duration / state.startDuration;
    },
  },
});

export const {
  setStartDuration, setDuration, setStarted, setStopped,
} = runTimerSlice.actions;

export default runTimerSlice.reducer;
