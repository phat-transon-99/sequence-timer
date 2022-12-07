import React from 'react';
import { View, StyleSheet } from 'react-native';
import { primaryColor } from '../../styles/colors';
import BottomCard from './components/BottomCard';
import TimerCardList, { ExtendedTimerCardProps } from './components/TimerCardList';
import TopTimeDisplay from './components/TopTimeDisplay';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: primaryColor,
  },
});

const items: ExtendedTimerCardProps[] = [
  {
    id: 1, name: 'Drawing', icon: '🌋', timeInSeconds: 1600, color: '#F77F00',
  },
  {
    id: 2, name: 'Drawing', icon: '🌋', timeInSeconds: 1600, color: '#F77F00',
  },
  {
    id: 3, name: 'Drawing', icon: '🌋', timeInSeconds: 1600, color: '#F77F00',
  },
  {
    id: 4, name: 'Drawing', icon: '🌋', timeInSeconds: 1600, color: '#F77F00',
  },
];

function HomeScreen(): JSX.Element {
  return (
    <View style={styles.screen}>
      <TopTimeDisplay />
      <BottomCard>
        <TimerCardList timers={items} />
      </BottomCard>
    </View>
  );
}

export default HomeScreen;
