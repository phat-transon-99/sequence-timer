import React from 'react';
import { ScrollView } from 'react-native';
import Timer from '../../../../models/Timer';
import EditableNumberDisplay from './components/EditableNumberDisplay';
import NameDisplay from './components/NameDisplay';
import createStyle from './index.style';

type Props = Timer;

export default function TimerSection({
  name, color,
}: Props): JSX.Element {
  const styles = createStyle(color);
  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <NameDisplay name={name} />
      <EditableNumberDisplay value="00" onValueChange={() => {}} />
    </ScrollView>
  );
}
