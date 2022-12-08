import { View } from 'react-native';
import React from 'react';
import styles from './index.style';
import colors from '../../constants/colors';
import ColorBlock, { ColorType } from './colorblock';

export default function ColorPicker(): JSX.Element {
  return (
    <View style={styles.colorPicker}>
      {colors.map((item) => (
        <View key={item} style={styles.block}>
          <ColorBlock color={item as ColorType} isSelected={false} />
        </View>
      ))}
    </View>
  );
}
