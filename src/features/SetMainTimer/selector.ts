import { RootState } from '../../store';

// eslint-disable-next-line
export const selectMainTimer = (state: RootState) => state.mainTimer.timer;
export const selectProgress = (state: RootState) => state.mainTimer.progress;
