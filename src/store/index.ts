import { configureStore } from '@reduxjs/toolkit';
import manageTimerReducer from '../features/MangeTimer/manageTimerSlice';
import setMainTimerSlice from '../features/SetMainTimer/setMainTimerSlice';

export const store = configureStore({
  reducer: {
    timers: manageTimerReducer,
    mainTimer: setMainTimerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
