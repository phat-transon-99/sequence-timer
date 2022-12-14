import React from 'react';
import { FlatList } from 'react-native';
import Timer from '../../../../models/Timer';
import SmartTimerCard from '../SmartTimerCard';
import styles from './index.style';

type TimerCardListProps = {
  timers: Timer[]
};

function TimerCardList({ timers }: TimerCardListProps): JSX.Element {
  return (
    <FlatList
      data={timers}
      keyExtractor={(item) => item.id.toString()}
      renderItem={(entry) => (
        <SmartTimerCard
          id={entry.item.id}
          name={entry.item.name}
          color={entry.item.color}
          duration={entry.item.duration}
        />
      )}
      contentContainerStyle={styles.list}
    />
  );
}

export default TimerCardList;
