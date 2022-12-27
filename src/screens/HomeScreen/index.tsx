import React, { useEffect } from 'react';
import { View } from 'react-native';
import TimerCardList from './components/SmartTimerList';
import styles from './index.style';
import CustomBottomSheet from '../../components/CustomBottomSheet';
import SmartHeader from './components/SmartHeader';
import { useAppDispatch } from '../../hooks/redux';
import { fetchAllTimers } from '../../features/MangeTimer/thunk';
import SmartTimerSection from './components/SmartTimerSection';

function HomeScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllTimers());
  }, []);

  return (
    <View style={styles.screen}>
      <SmartTimerSection />
      <CustomBottomSheet>
        <SmartHeader />
        <TimerCardList />
      </CustomBottomSheet>
    </View>
  );
}

export default HomeScreen;
