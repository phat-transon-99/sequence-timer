import React from 'react';
import { View } from 'react-native';
import CustomButton from '../../../../../../components/CustomButton';
import { WHITE_COLOR } from '../../../../../../styles/colors';
import styles from './index.style';

type Props = {
  text: string,
  color: string,
  onPress: () => void
};

export default function InvertedButton({ text, color, onPress }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <CustomButton text={text} color={WHITE_COLOR} textColor={color} onPress={onPress} />
    </View>
  );
}
