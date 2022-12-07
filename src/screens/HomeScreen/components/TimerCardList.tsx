import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import TimerCard, { TimerCardProps } from './TimerCard';

export type ExtendedTimerCardProps = TimerCardProps & { id: number };

type TimerCardListProps = {
  timers: ExtendedTimerCardProps[]
};

const styles = StyleSheet.create({
  list: {
    marginTop: 40,
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
