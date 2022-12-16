import React, { useCallback, useRef } from 'react';
import { View } from 'react-native';
import DropDown from '../Dropdown/NativeDropdown';
import { MINUTES, SECONDS } from '../../constants/times';
import styles from './index.style';
import {
  convertToSeconds, extractMinutesAndSeconds, extractTime, findMatchingDropdownItem,
} from '../../utils/time';
import { DropdownItem } from '../Dropdown/props';

type Props = {
  value: number,
  onDurationChosen: (duration: number) => void
};

export default function DurationPicker({ value, onDurationChosen }: Props): JSX.Element {
  // Extract the value
  const { minutes: minuteNumeric, seconds: secondNumeric } = extractMinutesAndSeconds(value);
  const defaultMinuteItem = findMatchingDropdownItem(MINUTES, minuteNumeric);
  const defaultSecondItem = findMatchingDropdownItem(SECONDS, secondNumeric);

  const minutes = useRef(0);
  const seconds = useRef(0);

  const onMinutesChosen = useCallback((item?: DropdownItem) => {
    if (item) {
      const minuteValue = extractTime(item.value);
      minutes.current = minuteValue;
      onDurationChosen(convertToSeconds(minuteValue, seconds.current));
    }
  }, [seconds]);

  const onSecondsChosen = useCallback((item?: DropdownItem) => {
    if (item) {
      const secondValue = extractTime(item.value);
      seconds.current = secondValue;
      onDurationChosen(convertToSeconds(minutes.current, secondValue));
    }
  }, [minutes]);

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <DropDown value={defaultMinuteItem?.value} title="Minutes" items={MINUTES} onItemSelected={onMinutesChosen} />
      </View>

      <View style={styles.item}>
        <DropDown value={defaultSecondItem?.value} title="Seconds" items={SECONDS} onItemSelected={onSecondsChosen} />
      </View>
    </View>
  );
}
