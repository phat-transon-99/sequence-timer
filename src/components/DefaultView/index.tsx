import React from 'react';
import { View } from 'react-native';
import styles from './index.style';

type Props = {
  children: React.ReactNode
};

export default function DefaultView({ children }: Props): JSX.Element {
  return (
    <View style={styles.container}>{ children }</View>
  );
}
