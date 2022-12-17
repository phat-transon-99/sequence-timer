import React, { useCallback, useState } from 'react';
import { View, TextInput } from 'react-native';
import styles from './index.style';

type Props = {
  value: string
  onValueChange: (value: string) => void,
};

export default function EditableNumberDisplay({ value, onValueChange }: Props): JSX.Element {
  const [val, setVal] = useState(value);
  const [focused, setFocused] = useState(false);

  // Event handler
  const onChange = useCallback((textVal: string) => {
    onValueChange(textVal);
    setVal(textVal);
  }, []);

  const onFocused = useCallback(() => {
    setFocused(true);
  }, []);

  const onBlur = useCallback(() => {
    setFocused(false);
  }, []);

  return (
    <View>
      <TextInput
        keyboardType="numeric"
        style={[styles.textInput, focused ? styles.textInputFocus : styles.textInputBlur]}
        value={val}
        onChangeText={onChange}
        onFocus={onFocused}
        onBlur={onBlur}
      />
    </View>
  );
}
