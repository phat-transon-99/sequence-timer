import React from 'react';
import { View, StyleSheet } from 'react-native';
import { primaryColor } from '../../styles/colors';
import BottomCard from './components/BottomCard';
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
      <BottomCard />
    </View>
  );
}

export default HomeScreen;
