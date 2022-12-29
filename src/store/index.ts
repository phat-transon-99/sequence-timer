import { configureStore } from '@reduxjs/toolkit';
import manageTimerReducer from '../features/MangeTimer/manageTimerSlice';
import setMainTimerReducer from '../features/SetMainTimer/setMainTimerSlice';
import runTimerReducer from '../features/RunTimer/runTimerSlice';

export const store = configureStore({
  reducer: {
    timers: manageTimerReducer,
    mainTimer: setMainTimerReducer,
    runTimer: runTimerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
