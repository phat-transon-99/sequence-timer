import React from 'react';
import { TextInput } from 'react-native';
import styles from './index.style';
import { GRAY_COLOR } from '../../styles/colors';

type Props = {
  placeholder?: string,
  onChangeText?: (text: string) => void
};

export default function TextBox({ placeholder, onChangeText }: Props): JSX.Element {
  return (
    <TextInput
      selectionColor={GRAY_COLOR}
      style={styles.textBox}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
}
