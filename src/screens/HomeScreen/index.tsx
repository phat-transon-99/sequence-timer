import React from 'react';
import { View } from 'react-native';
import DefaultView from '../../components/SafeAreaView';
import Timer from '../../models/Timer';
import Header from './components/Header';
import TimerCardList from './components/TimerCardList';
import TopTimeDisplay from './components/TopTimeDisplay';
import styles from './index.style';
import { PRIMARY_COLOR } from '../../styles/colors';
import CustomBottomSheet from '../../components/CustomBottomSheet';

const items: Timer[] = [
  {
    id: 1, name: 'Drawing', duration: 1600, color: '#F77F00',
  },
  {
    id: 2, name: 'Drawing', duration: 1600, color: '#2a9d8f',
  },
  {
    id: 3, name: 'Drawing', duration: 1600, color: '#d62828',
  },
  {
    id: 4, name: 'Drawing', duration: 1600, color: '#7209b7',
  },
];

function HomeScreen(): JSX.Element {
  return (
    <DefaultView color={PRIMARY_COLOR}>
      <View style={styles.screen}>
        <TopTimeDisplay />
        <CustomBottomSheet>
          <Header onAddClick={() => {}} />
          <TimerCardList timers={items} />
        </CustomBottomSheet>
      </View>
    </DefaultView>
  );
}

export default HomeScreen;
