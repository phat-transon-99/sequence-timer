import React from 'react';
import { View, StyleSheet } from 'react-native';

type DisplayProps = {
  children?: React.ReactNode
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function TopTimeDisplay({ children }: DisplayProps): JSX.Element {
  return (
    <View style={styles.container}>{ children }</View>
  );
}

export default TopTimeDisplay;
