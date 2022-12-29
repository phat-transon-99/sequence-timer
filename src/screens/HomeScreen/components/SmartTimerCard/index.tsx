import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { UPDATE_TIMER_SCREEN } from '../../../../constants/navigation.screen';
import { setStartDuration } from '../../../../features/RunTimer/runTimerSlice';
import { setMainTimer } from '../../../../features/SetMainTimer/setMainTimerSlice';
import { useAppDispatch } from '../../../../hooks/redux';
import Timer from '../../../../models/Timer';
import TimerCard from '../TimerCard';

export default function SmartTimerCard({
  id, name, color, duration,
}: Timer): JSX.Element {
  // Navigation
  const navigation = useNavigation<NavigationProp<ParamListBase & Timer>>();

  // Set main timer
  const dispatch = useAppDispatch();

  // On card pressed
  const onCardPressed = useCallback(() => {
    navigation.navigate(UPDATE_TIMER_SCREEN, {
      id, name, color, duration,
    });
  }, [id, name, color, duration]);

  // On start timer button pressed
  const onStartPressed = useCallback(() => {
    // Dispatch set main timer
    dispatch(setMainTimer({
      id, name, color, duration,
    }));

    // Dispatch set timer start duration
    dispatch(setStartDuration(duration));
  }, [id, name, color, duration]);

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
