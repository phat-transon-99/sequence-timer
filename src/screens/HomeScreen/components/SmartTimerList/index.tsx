import React from 'react';
import { Text } from 'react-native';
import { selectTimers } from '../../../../features/MangeTimer/selector';
import { useAppSelector } from '../../../../hooks/redux';
import TimerCardList from '../TimerCardList';
import Timer from '../../../../models/Timer';

function renderTimerList(loading: boolean, error: string | boolean, timers: Timer[]): JSX.Element {
  if (loading) {
    return <Text>Is Loading</Text>;
  } if (error) {
    return <Text>Error encountered</Text>;
  }
  return <TimerCardList timers={timers} />;
}

export default function SmartTimerList(): JSX.Element {
  // Get properties from state
  const { loading, error, body } = useAppSelector(selectTimers);
  return renderTimerList(loading, error, body || []);
}
