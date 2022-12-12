import React, { useState, useCallback } from 'react';
import { TextInput } from 'react-native';
import styles from './index.style';
import { GRAY_COLOR } from '../../styles/colors';

type Props = {
  placeholder?: string,
  onChangeText?: (text: string) => void
};

export default function TextBox({ placeholder, onChangeText }: Props): JSX.Element {
  const [text, setText] = useState<string>();

  const onChangeTextHandler = useCallback((textValue: string) => {
    setText(textValue);
    onChangeText?.(textValue);
  }, []);

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
