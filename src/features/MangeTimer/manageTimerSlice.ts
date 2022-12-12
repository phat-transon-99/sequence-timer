import { createSlice } from '@reduxjs/toolkit';
import ReduxModel from '../../models/ReduxModel';
import Timer from '../../models/Timer';

const initialState: ReduxModel<Timer[]> = {
  loading: false,
  error: false,
  body: [],
};

export default createSlice({
  name: 'timers',
  initialState,
  reducers: {},
});
