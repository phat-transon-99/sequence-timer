import React, { useEffect } from 'react';
import { View } from 'react-native';
import TimerCardList from './components/SmartTimerList';
import styles from './index.style';
import CustomBottomSheet from '../../components/CustomBottomSheet';
import SmartHeader from './components/SmartHeader';
import { useAppDispatch } from '../../hooks/redux';
import { fetchAllTimers } from '../../features/MangeTimer/thunk';
import TimerSection from './components/TimerSection';
import Timer from '../../models/Timer';

const TIMER: Timer = {
  id: 0,
  name: 'Song',
  color: '#F77F00',
  duration: 1600,
};

function HomeScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllTimers());
  }, []);

  return (
    <View style={styles.screen}>
      <TimerSection
        id={TIMER.id}
        name={TIMER.name}
        color={TIMER.color}
        duration={TIMER.duration}
      />
      <CustomBottomSheet>
        <SmartHeader />
        <TimerCardList />
      </CustomBottomSheet>
    </View>
  );
}

export default HomeScreen;
