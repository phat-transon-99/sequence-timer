import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fiveMinuteTimer } from '../../constants/timerSamples';
import Timer from '../../models/Timer';

type State = {
  timer: Timer,
  progress: number,
};

const initialState: State = {
  timer: fiveMinuteTimer,
  progress: 0.25,
};

const setMainTimerSlice = createSlice({
  name: 'setMainTimer',
  initialState,
  reducers: {
    setMainTimer: (state, action: PayloadAction<Timer>) => {
      state.timer = action.payload;
    },
    setProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
  },
});

export default setMainTimerSlice.reducer;

export const { setMainTimer, setProgress } = setMainTimerSlice.actions;
