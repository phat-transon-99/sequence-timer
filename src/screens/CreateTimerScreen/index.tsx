import React, { useCallback } from 'react';
import { View } from 'react-native';
import DefaultView from '../../components/DefaultView';
import Header from '../../components/Header';
import TextBox from '../../components/TextBox';
import styles from './index.style';
import { WHITE_COLOR } from '../../styles/colors';
import ColorPicker from '../../components/ColorPicker';
import DropDown from '../../components/Dropdown/NativeDropdown';
import { DropdownItem } from '../../components/Dropdown/props';
import DurationPicker from '../../components/DurationPicker';

const items: DropdownItem[] = [
  {
    title: 'War Pig',
    value: 'war_pig_1',
  },
  {
    title: 'War Pig',
    value: 'war_pig_2',
  },
  {
    title: 'War Pig',
    value: 'war_pig_3',
  },
];

export default function CreateTimerScreen(): JSX.Element {
  const onItemSelected = useCallback(() => {}, []);

  return (
    <DefaultView color={WHITE_COLOR}>
      <View style={styles.container}>
        <Header>Select name</Header>
        <TextBox placeholder="Enter time" />

        <Header>Select color</Header>
        <ColorPicker />

        <Header>Select alarm</Header>
        <DropDown title="Choose alarm" items={items} onItemSelected={onItemSelected} />

        <Header>Select duration</Header>
        <DurationPicker />
      </View>
    </DefaultView>
  );
}
