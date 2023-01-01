import { RootState } from '../../store';

export const selectStartDuration = (state: RootState) => state.runTimer.startDuration;
export const selectCurrentDuration = (state: RootState) => state.runTimer.duration;
export const selectCurrentProgress = (state: RootState) => state.runTimer.progress;
export const selectHasStarted = (state: RootState) => state.runTimer.hasStarted;
export const selectHasStopped = (state: RootState) => state.runTimer.hasStopped;
