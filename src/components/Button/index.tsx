import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { CustomFontText } from '../Text';
import createStyle, { ButtonType } from './index.style';

type Props = {
  text: string,
  type: ButtonType,
  onPress: () => void
};

export default function CustomButton({ text, type, onPress }: Props): JSX.Element {
  const styles = createStyle(type);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.4}>
      <CustomFontText>
        <Text style={styles.text}>{ text }</Text>
      </CustomFontText>
    </TouchableOpacity>
  );
}
