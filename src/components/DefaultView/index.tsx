import React from 'react';
import { View } from 'react-native';
import createStyle from './index.style';

type Props = {
  children: React.ReactNode,
  color?: string
};

export default function DefaultView({ children, color }: Props): JSX.Element {
  const styles = createStyle(color);

  return (
    <View style={styles.container}>{ children }</View>
  );
}
