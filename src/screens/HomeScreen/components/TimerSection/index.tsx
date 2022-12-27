import React from 'react';
import { ScrollView, View } from 'react-native';
import Timer from '../../../../models/Timer';
import InvertedButton from './components/InvertedButton';
import NameDisplay from './components/NameDisplay';
import TimeDisplay from './components/TimeDisplay';
import createStyle from './index.style';

type Props = Timer & { percentage: number };

export default function TimerSection({
  name, color, duration, percentage,
}: Props): JSX.Element {
  const styles = createStyle(color);
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
      >
        <NameDisplay name={name} />
        <TimeDisplay duration={duration} percentage={percentage} />
        <View style={styles.buttonContainer}>
          <InvertedButton text="Stop" color={color} onPress={() => {}} />
          <InvertedButton text="Reset" color={color} onPress={() => {}} />
        </View>
      </ScrollView>
    </View>
  );
}
