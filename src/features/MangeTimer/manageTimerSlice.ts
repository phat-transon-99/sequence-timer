import { createSlice } from '@reduxjs/toolkit';
import ReduxModel from '../../models/ReduxModel';

export interface Timer {
  id: number,
  name: string,
  color: string,
  duration: number,
}

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
