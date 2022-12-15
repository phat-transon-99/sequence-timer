import React, { useState, useCallback } from 'react';
import { TextInput } from 'react-native';
import styles from './index.style';
import { GRAY_COLOR } from '../../styles/colors';

type Props = {
  value?: string,
  placeholder?: string,
  onChangeText?: (text: string) => void
};

export default function TextBox({ value, placeholder, onChangeText }: Props): JSX.Element {
  const [text, setText] = useState<string>(value || '');

  const onChangeTextHandler = useCallback((textValue: string) => {
    setText(textValue);
    onChangeText?.(textValue);
  }, [text]);

  return (
    <TextInput
      value={text}
      selectionColor={GRAY_COLOR}
      style={styles.textBox}
      placeholder={placeholder}
      onChangeText={onChangeTextHandler}
    />
  );
}
