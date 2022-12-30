import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import TimerCardList from './components/SmartTimerList';
import styles from './index.style';
import CustomBottomSheet from '../../components/CustomBottomSheet';
import SmartHeader from './components/SmartHeader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchAllTimers } from '../../features/MangeTimer/thunk';
import SmartTimerSection from './components/SmartTimerSection';
import { selectHasStarted } from '../../features/RunTimer/selector';

function HomeScreen(): JSX.Element {
  // Control bottom sheet
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Dispatch to fetch timers
  const dispatch = useAppDispatch();

  // Get the state of timer
  const hasTimerStarted = useAppSelector(selectHasStarted);

  // Fetch all timers on start
  useEffect(() => {
    dispatch(fetchAllTimers());
  }, []);

  // Close the bottom sheet when timer is started
  useEffect(() => {
    if (hasTimerStarted) {
      bottomSheetRef.current?.collapse();
    }
  }, [hasTimerStarted]);

  return (
    <View style={styles.screen}>
      <SmartTimerSection />
      <CustomBottomSheet ref={bottomSheetRef}>
        <SmartHeader />
        <TimerCardList />
      </CustomBottomSheet>
    </View>
  );
}

export default HomeScreen;
