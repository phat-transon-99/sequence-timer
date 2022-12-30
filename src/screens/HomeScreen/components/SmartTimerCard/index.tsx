import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { UPDATE_TIMER_SCREEN } from '../../../../constants/navigation.screen';
import { setStartDuration } from '../../../../features/RunTimer/runTimerSlice';
import { selectHasStarted } from '../../../../features/RunTimer/selector';
import { setMainTimer } from '../../../../features/SetMainTimer/setMainTimerSlice';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import Timer from '../../../../models/Timer';
import TimerCard from '../TimerCard';

export default function SmartTimerCard({
  id, name, color, duration,
}: Timer): JSX.Element {
  // Navigation
  const navigation = useNavigation<NavigationProp<ParamListBase & Timer>>();

  // Set main timer
  const dispatch = useAppDispatch();

  // Check if the timer has started yet
  const hasTimerStarted = useAppSelector(selectHasStarted);

  // On card pressed
  const onCardPressed = useCallback(() => {
    navigation.navigate(UPDATE_TIMER_SCREEN, {
      id, name, color, duration,
    });
  }, [id, name, color, duration]);

  // On start timer button pressed
  const onStartPressed = useCallback(() => {
    if (!hasTimerStarted) {
      // Only when a timer is not started -> Run timer
      // Dispatch set main timer
      dispatch(setMainTimer({
        id, name, color, duration,
      }));

      // Dispatch set timer start duration
      dispatch(setStartDuration(duration));
    }
  }, [id, name, color, duration, hasTimerStarted]);

  return (
    <TimerCard
      name={name}
      color={color}
      duration={duration}
      id={id}
      onPress={onCardPressed}
      onStartPress={onStartPressed}
    />
  );
}
