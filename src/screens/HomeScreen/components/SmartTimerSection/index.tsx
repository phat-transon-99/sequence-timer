import React, { useEffect } from 'react';
import { selectMainTimer, selectProgress } from '../../../../features/SetMainTimer/selector';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import TimerSection from '../TimerSection';
import AbstractCountdownTimer from '../../../../timer/AbstractCountdownTimer';
import SetIntervalTimer from '../../../../timer/SetIntervalCountdownTimer';
import { setProgress, setTime } from '../../../../features/SetMainTimer/setMainTimerSlice';

// Create timer
let timer: AbstractCountdownTimer;

export default function SmartTimerSection() {
  // Extract main timer
  const mainTimer = useAppSelector(selectMainTimer);
  const progress = useAppSelector(selectProgress);

  // Dispatch
  const dispatch = useAppDispatch();

  // Callback
  function updateTimeAndProgress(timeLeft: number) {
    dispatch(setTime(timeLeft));
    dispatch(setProgress((timer.duration - timeLeft) / timer.duration));
  }

  // Create timer
  useEffect(() => {
    timer = new SetIntervalTimer(mainTimer.duration, updateTimeAndProgress);
    timer.start();
  }, []);

  return (
    <TimerSection
      id={mainTimer?.id}
      name={mainTimer?.name}
      color={mainTimer?.color}
      duration={mainTimer.duration}
      percentage={progress}
    />
  );
}
