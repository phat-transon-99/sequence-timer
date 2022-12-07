import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Timer from '../../../models/Timer';
import TimerCard from './TimerCard';

type TimerCardListProps = {
  timers: Timer[]
};

const styles = StyleSheet.create({
  list: {
    marginTop: 25,
    marginHorizontal: 30,
  },
});

function TimerCardList({ timers }: TimerCardListProps): JSX.Element {
  return (
    <FlatList
      data={timers}
      keyExtractor={(item) => item.id.toString()}
      renderItem={(entry) => (
        <TimerCard
          id={entry.item.id}
          name={entry.item.name}
          icon={entry.item.icon}
          color={entry.item.color}
          timeInSeconds={entry.item.timeInSeconds}
        />
      )}
      contentContainerStyle={styles.list}
    />
  );
}

export default TimerCardList;
