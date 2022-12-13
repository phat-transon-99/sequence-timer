import React, { useCallback, useRef } from 'react';
import { View } from 'react-native';
import DropDown from '../Dropdown/NativeDropdown';
import { MINUTES, SECONDS } from '../../constants/times';
import styles from './index.style';
import { convertToSeconds, extractTime } from '../../utils/time';
import { DropdownItem } from '../Dropdown/props';

type Props = {
  onDurationChosen: (duration: number) => void
};

export default function DurationPicker({ onDurationChosen }: Props): JSX.Element {
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
        <DropDown title="Minutes" items={MINUTES} onItemSelected={onMinutesChosen} />
      </View>

      <View style={styles.item}>
        <DropDown title="Seconds" items={SECONDS} onItemSelected={onSecondsChosen} />
      </View>
    </View>
  );
}
