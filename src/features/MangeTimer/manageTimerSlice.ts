import { createSlice } from '@reduxjs/toolkit';
import ReduxModel from '../../models/ReduxModel';
import Timer from '../../models/Timer';

const initialState: ReduxModel<Timer[]> = {
  loading: false,
  error: false,
  body: [],
};

export const manageTimerSlice = createSlice({
  name: 'timers',
  initialState,
  reducers: {},
});

export default manageTimerSlice.reducer;
