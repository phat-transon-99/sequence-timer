import React from 'react';
import { selectMainTimer, selectProgress } from '../../../../features/SetMainTimer/selector';
import { useAppSelector } from '../../../../hooks/redux';
import TimerSection from '../TimerSection';

export default function SmartTimerSection() {
  // Extract main timer
  const mainTimer = useAppSelector(selectMainTimer);
  const progress = useAppSelector(selectProgress);

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
