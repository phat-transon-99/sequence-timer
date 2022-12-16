import { createAsyncThunk } from '@reduxjs/toolkit';
import TimerService from '../../services/timer/DatabaseTimerService';
import Timer from '../../models/Timer';

export const fetchAllTimers = createAsyncThunk(
  'timers/fetchAllTimers',
  async () => {
    const allTimers = await TimerService.getAllTimers();
    return allTimers;
  },
);

export const createNewTimer = createAsyncThunk(
  'timers/createNewTimer',
  async (timer: Timer) => {
    const createdTimer = await TimerService.createTimer(timer);
    return createdTimer;
  },
);

export const deleteTimer = createAsyncThunk(
  'timers/deleteTimer',
  async (id: number) => {
    const result = await TimerService.deleteTimer(id);
    return result;
  },
);

export const updateTimer = createAsyncThunk(
  'timers/updateTimer',
  async (timer: Timer) => {
    const updatedTimer = await TimerService.updateTimer(timer);
    return updatedTimer;
  },
);
