import React from 'react';
import { View, StyleSheet } from 'react-native';
import { primaryColor } from '../../styles/colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: primaryColor,
  },
});

function HomeScreen(): JSX.Element {
  return (
    <View style={styles.screen} />
  );
}

export default HomeScreen;
