import React from 'react';
import { View } from 'react-native';
import styles from './index.style';

type DisplayProps = {
  children?: React.ReactNode
};

function TopTimeDisplay({ children }: DisplayProps): JSX.Element {
  return (
    <View style={styles.container}>{ children }</View>
  );
}

export default TopTimeDisplay;
