import React from 'react';
import { View } from 'react-native';
import DefaultView from '../../components/DefaultView';
import Timer from '../../models/Timer';
import BottomCard from './components/BottomCard';
import Header from './components/Header';
import TimerCardList from './components/TimerCardList';
import TopTimeDisplay from './components/TopTimeDisplay';
import styles from './index.style';

const items: Timer[] = [
  {
    id: 1, name: 'Drawing', icon: '🌋', timeInSeconds: 1600, color: '#F77F00',
  },
  {
    id: 2, name: 'Drawing', icon: '🌋', timeInSeconds: 1600, color: '#2a9d8f',
  },
  {
    id: 3, name: 'Drawing', icon: '🌋', timeInSeconds: 1600, color: '#d62828',
  },
  {
    id: 4, name: 'Drawing', icon: '🌋', timeInSeconds: 1600, color: '#7209b7',
  },
];

function HomeScreen(): JSX.Element {
  return (
    <DefaultView>
      <View style={styles.screen}>
        <TopTimeDisplay />
        <BottomCard>
          <Header onAddClick={() => {}} />
          <TimerCardList timers={items} />
        </BottomCard>
      </View>
    </DefaultView>
  );
}

export default HomeScreen;
