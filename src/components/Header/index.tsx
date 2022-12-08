import React from 'react';
import { Text } from 'react-native';
import styles from './index.style';

type Props = {
  children: React.ReactNode
};

export default function FormHeader({ children }: Props): JSX.Element {
  return (
    <Text style={styles.header}>{ children }</Text>
  );
}
