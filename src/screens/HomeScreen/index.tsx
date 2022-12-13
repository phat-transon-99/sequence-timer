import React from 'react';
import { View } from 'react-native';
import DefaultView from '../../components/SafeAreaView';
import TimerCardList from './components/TimerCardList';
import TopTimeDisplay from './components/TopTimeDisplay';
import styles from './index.style';
import { PRIMARY_COLOR } from '../../styles/colors';
import CustomBottomSheet from '../../components/CustomBottomSheet';
import TIMERS from '../../constants/timers';
import SmartHeader from './components/SmartHeader';

function HomeScreen(): JSX.Element {
  return (
    <DefaultView color={PRIMARY_COLOR}>
      <View style={styles.screen}>
        <TopTimeDisplay />
        <CustomBottomSheet>
          <SmartHeader />
          <TimerCardList timers={TIMERS} />
        </CustomBottomSheet>
      </View>
    </DefaultView>
  );
}

export default HomeScreen;
