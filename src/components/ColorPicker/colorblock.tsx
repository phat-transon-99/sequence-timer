import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import createStyle from './colorblock.style';

export type ColorType = '#F77F00' | '#2a9d8f' | '#d62828' | '#7209b7';

export type ColorProps = {
  color: ColorType,
  isSelected: boolean,
  onPress: (color: ColorType) => void
};

export default function ColorBlock({ color, isSelected, onPress }: ColorProps): JSX.Element {
  const styles = createStyle(color, isSelected);

  return (
    <TouchableOpacity
      activeOpacity={0.4}
      style={styles.colorContainer}
      onPress={() => onPress(color)}
    >
      <View style={styles.colorBlock} />
    </TouchableOpacity>
  );
}
