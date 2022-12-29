import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fiveMinuteTimer } from '../../constants/timerSamples';
import Timer from '../../models/Timer';

type State = {
  timer: Timer,
};

const initialState: State = {
  timer: fiveMinuteTimer,
};

const setMainTimerSlice = createSlice({
  name: 'setMainTimer',
  initialState,
  reducers: {
    setMainTimer: (state, action: PayloadAction<Timer>) => {
      state.timer = action.payload;
    },
  },
});

export default setMainTimerSlice.reducer;

export const { setMainTimer } = setMainTimerSlice.actions;
