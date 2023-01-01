import React from 'react';
import { ScrollView, View } from 'react-native';
import Timer from '../../../../models/Timer';
import NameDisplay from './components/NameDisplay';
import TimeDisplay from './components/TimeDisplay';
import createStyle from './index.style';
import ControllSection from '../ControllSection';

type Props = Timer & {
  percentage: number,
  isStopped: boolean,
  onStartStopPressed: () => void,
  onResetPressed: () => void,
};

export default function TimerSection({
  name, color, duration, percentage, isStopped, onStartStopPressed, onResetPressed,
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
        <ControllSection
          color={color}
          isStopped={isStopped}
          onStartStopPressed={onStartStopPressed}
          onResetPressed={onResetPressed}
        />
      </ScrollView>
    </View>
  );
}
