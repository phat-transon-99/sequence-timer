import { RootState } from '../../store';

export const selectTimers = (state: RootState) => state.timers;

export const selectTimerList = (state: RootState) => state.timers.body || [];
