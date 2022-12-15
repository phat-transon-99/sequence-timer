import { View } from 'react-native';
import React, { useState, useCallback } from 'react';
import styles from './index.style';
import colors from '../../constants/colors';
import ColorBlock, { ColorType } from './colorblock';

type Props = {
  value?: ColorType,
  onColorChosen: (color: ColorType) => void
};

export default function ColorPicker({ value, onColorChosen }: Props): JSX.Element {
  // Set selected color and highlight
  const [selectedColor, setSelectedColor] = useState<ColorType>(value || '#F77F00');

  // On press -> Set selected color
  const onPress = useCallback((color: ColorType) => {
    setSelectedColor(color);
    onColorChosen(color);
  }, []);

  return (
    <View style={styles.colorPicker}>
      {colors.map((item) => (
        <View key={item} style={styles.block}>
          <ColorBlock
            color={item as ColorType}
            isSelected={selectedColor === item}
            onPress={onPress}
          />
        </View>
      ))}
    </View>
  );
}
