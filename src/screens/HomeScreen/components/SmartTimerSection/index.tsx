import React, { useCallback, useEffect } from 'react';
import { selectMainTimer } from '../../../../features/SetMainTimer/selector';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import TimerSection from '../TimerSection';
import AbstractCountdownTimer from '../../../../timer/AbstractCountdownTimer';
import SetIntervalTimer from '../../../../timer/SetIntervalCountdownTimer';
import {
  selectCurrentDuration,
  selectCurrentProgress,
  selectHasStarted,
  selectHasStopped,
  selectStartDuration,
} from '../../../../features/RunTimer/selector';
import { setDuration, setStarted, setStopped } from '../../../../features/RunTimer/runTimerSlice';
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
  const hasStopped = useAppSelector(selectHasStopped);

  // Dispatch
  const dispatch = useAppDispatch();

  // Callback
  const onTimerUpdateCallback = useCallback((timeLeft: number) => {
    dispatch(setDuration(timeLeft));
  }, []);

  const onTimerEndCallback = useCallback(() => {
    dispatch(setStarted(false));
  }, []);

  // Create timer
  useEffect(() => {
    if (!hasStarted) {
      timer = new SetIntervalTimer(
        startDuration,
        onTimerUpdateCallback,
        onTimerEndCallback,
      );
      timer.start();
      dispatch(setStarted(true));
    }
  }, [startDuration]);

  // Start and stop timer
  const onStartStopPressed = useCallback(() => {
    if (hasStopped) {
      timer.start();
      dispatch(setStopped(false));
    } else {
      timer.stop();
      dispatch(setStopped(true));
    }
  }, [hasStopped]);

  return (
    <TimerSection
      id={mainTimer?.id}
      name={mainTimer?.name}
      color={mainTimer?.color}
      duration={currentDuration}
      percentage={currentProgress}
      isStopped={hasStopped}
      onStartStopPressed={onStartStopPressed}
      onResetPressed={() => {}}
    />
  );
}
