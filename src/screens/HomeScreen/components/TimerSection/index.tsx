import React from 'react';
import { View } from 'react-native';
import Timer from '../../../../models/Timer';
import NameDisplay from './components/NameDisplay';
import createStyle from './index.style';

type Props = Timer;

export default function TimerSection({
  name, color,
}: Props): JSX.Element {
  const styles = createStyle(color);
  return (
    <View style={styles.container}>
      <NameDisplay name={name} />
    </View>
  );
}
