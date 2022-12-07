import React from 'react';
import { View, StyleSheet } from 'react-native';
import { primaryColor } from '../../styles/colors';
import BottomCard from './components/BottomCard';
import TimerCard from './components/TimerCard';
import TopTimeDisplay from './components/TopTimeDisplay';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: primaryColor,
  },
});

function HomeScreen(): JSX.Element {
  return (
    <View style={styles.screen}>
      <TopTimeDisplay />
      <BottomCard>
        <TimerCard name="Drawing" icon="🌋" timeInSeconds={1600} color="#00C0FF" />
        <TimerCard name="Drawing" icon="🌋" timeInSeconds={1600} color="#F7008D" />
        <TimerCard name="Drawing" icon="🌋" timeInSeconds={1600} color="#F77F00" />
      </BottomCard>
    </View>
  );
}

export default HomeScreen;
