import React from 'react';
import { View } from 'react-native';
import styles from './index.style';

type CardProps = {
  children?: React.ReactNode
};

function BottomCard({ children }: CardProps): JSX.Element {
  return (
    <View style={styles.card}>{ children }</View>
  );
}

export default BottomCard;
