import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { CustomFontText } from '../Text';
import createStyle from './index.style';

export type Props = {
  text: string,
  textColor: string,
  color: string,
  onPress: () => void
};

export default function CustomButton({
  text, color, textColor, onPress,
}: Props): JSX.Element {
  const styles = createStyle(color, textColor);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.4}>
      <CustomFontText>
        <Text style={styles.text}>{ text }</Text>
      </CustomFontText>
    </TouchableOpacity>
  );
}
