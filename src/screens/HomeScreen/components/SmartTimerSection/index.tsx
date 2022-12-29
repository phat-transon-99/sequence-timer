import React, { useEffect } from 'react';
import { selectMainTimer } from '../../../../features/SetMainTimer/selector';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import TimerSection from '../TimerSection';
import AbstractCountdownTimer from '../../../../timer/AbstractCountdownTimer';
import SetIntervalTimer from '../../../../timer/SetIntervalCountdownTimer';
import {
  selectCurrentDuration,
  selectCurrentProgress,
  selectHasStarted,
  selectStartDuration,
} from '../../../../features/RunTimer/selector';
import { setDuration, setStarted } from '../../../../features/RunTimer/runTimerSlice';

// Create timer
let timer: AbstractCountdownTimer;

export default function SmartTimerSection() {
  // Extract main timer
  const mainTimer = useAppSelector(selectMainTimer);

  // Control timer
  const startDuration = useAppSelector(selectStartDuration);
  const currentDuration = useAppSelector(selectCurrentDuration);
  const currentProgress = useAppSelector(selectCurrentProgress);
  const hasStarted = useAppSelector(selectHasStarted);

  // Dispatch
  const dispatch = useAppDispatch();

  // Callback
  function onTimerUpdate(timeLeft: number) {
    dispatch(setDuration(timeLeft));
  }

  function onTimerEnd() {
    dispatch(setStarted(false));
  }

  // Create timer
  useEffect(() => {
    if (!hasStarted) {
      timer = new SetIntervalTimer(
        startDuration,
        onTimerUpdate,
        onTimerEnd,
      );
      timer.start();
      dispatch(setStarted(true));
    }
  }, [startDuration, hasStarted]);

  return (
    <TimerSection
      id={mainTimer?.id}
      name={mainTimer?.name}
      color={mainTimer?.color}
      duration={currentDuration}
      percentage={currentProgress}
    />
  );
}
