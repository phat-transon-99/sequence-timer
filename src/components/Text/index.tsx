import React from 'react';
import { Text } from 'react-native';
import styles from './index.style';

type CustomFontTextProps = {
  children: React.ReactNode
};

export function CustomFontText({ children }: CustomFontTextProps): JSX.Element {
  return (
    <Text style={styles.text}>{ children }</Text>
  );
}

export function CustomFontTextBold({ children }: CustomFontTextProps): JSX.Element {
  return (
    <Text style={styles.textBold}>{ children }</Text>
  );
}
