import React from 'react';
import { View } from 'react-native';
import DropDown from '../Dropdown/NativeDropdown';
import { MINUTES, SECONDS } from '../../constants/times';
import styles from './index.style';

export default function DurationPicker(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <DropDown title="Minutes" items={MINUTES} onItemSelected={() => {}} />
      </View>

      <View style={styles.item}>
        <DropDown title="Seconds" items={SECONDS} onItemSelected={() => {}} />
      </View>
    </View>
  );
}
