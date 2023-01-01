import React from 'react';
import { View } from 'react-native';
import styles from './index.style';
import InvertedButton from '../TimerSection/components/InvertedButton';

type Props = {
  color: string,
  isStopped: boolean,
  onStartStopPressed: () => void,
  onResetPressed: () => void
};

export default function ControllSection({
  color, onStartStopPressed, onResetPressed, isStopped,
}: Props) {
  return (
    <View style={styles.buttonContainer}>
      <InvertedButton text={isStopped ? 'Start' : 'Stop'} color={color} onPress={onStartStopPressed} />
      <InvertedButton text="Reset" color={color} onPress={onResetPressed} />
    </View>
  );
}
