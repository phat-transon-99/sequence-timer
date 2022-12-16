import { createSlice } from '@reduxjs/toolkit';
import ReduxModel from '../../models/ReduxModel';
import Timer from '../../models/Timer';
import {
  createNewTimer, deleteTimer, fetchAllTimers, updateTimer,
} from './thunk';

const initialState: ReduxModel<Timer[]> = {
  loading: false,
  error: false,
  body: [],
};

export const manageTimerSlice = createSlice({
  name: 'timers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add cases for getting all timers

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    builder.addCase(fetchAllTimers.pending, (state) => {
      state.error = false;
      state.loading = true;
      state.body = undefined;
    });

    builder.addCase(fetchAllTimers.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.error = action.payload.error;
        state.loading = false;
        state.body = undefined;
      } else {
        state.error = false;
        state.loading = false;
        state.body = action.payload.body;
      }
    });

    // Add cases for creating a new timer
    builder.addCase(createNewTimer.pending, () => {
      // Handling creating new timer
    });

    builder.addCase(createNewTimer.fulfilled, (state, action) => {
      // On success -> Push to timer list
      if (action.payload.body) {
        state.body?.push(action.payload.body);
      }
    });

    // Add cases for deleting a timer
    builder.addCase(deleteTimer.pending, () => {
      // Handle deleting timer
    });

    builder.addCase(deleteTimer.fulfilled, (state, action) => {
      if (!action.payload.error) {
        state.body = state.body?.filter((item) => item.id !== action.payload.body);
      }
    });

    // Add cases for updating a timer
    builder.addCase(updateTimer.pending, () => {
      // Handling update timer pending
    });

    builder.addCase(updateTimer.fulfilled, (state, action) => {
      if (!action.payload.error) {
        state.body = state.body?.map(
          (item) => {
            if (item.id === action.payload.body?.id) {
              return action.payload.body;
            }
            return item;
          },
        );
      }
    });
  },
});

export default manageTimerSlice.reducer;
