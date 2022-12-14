import { RootState } from '../../store';

const selectTimers = (state: RootState) => state.timers;

export default selectTimers;
