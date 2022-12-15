import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { UPDATE_TIMER_SCREEN } from '../../../../constants/navigation.screen';
import Timer from '../../../../models/Timer';
import TimerCard from '../TimerCard';

export default function SmartTimerCard({
  id, name, color, duration,
}: Timer): JSX.Element {
  // Navigation
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  // On card pressed
  const onCardPressed = useCallback(() => {
    navigation.navigate(UPDATE_TIMER_SCREEN);
  }, []);

  return (
    <TimerCard
      name={name}
      color={color}
      duration={duration}
      id={id}
      onPress={onCardPressed}
    />
  );
}
