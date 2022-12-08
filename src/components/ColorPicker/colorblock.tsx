import React from 'react';
import { View } from 'react-native';
import createStyle from './colorblock.style';

export type ColorType = '#F77F00' | '#2a9d8f' | '#d62828' | '#7209b7';

export type ColorProps = {
  color: ColorType,
  isSelected: boolean
};

export default function ColorBlock({ color }: ColorProps): JSX.Element {
  const styles = createStyle(color);
  return (
    <View style={styles.colorBlock} />
  );
}
