import { configureStore } from '@reduxjs/toolkit';
import manageTimerReducer from '../features/MangeTimer/manageTimerSlice';

const store = configureStore({
  reducer: {
    timers: manageTimerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
