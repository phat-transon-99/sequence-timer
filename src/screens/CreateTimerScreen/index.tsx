import React, { useCallback } from 'react';
import { View } from 'react-native';
import DefaultView from '../../components/DefaultView';
import Header from '../../components/Header';
import TextBox from '../../components/TextBox';
import styles from './index.style';
import { WHITE_COLOR } from '../../styles/colors';
import ColorPicker from '../../components/ColorPicker';
import DropDown from '../../components/Dropdown';
import { DropdownItem } from '../../components/Dropdown/list';

const items: DropdownItem[] = [
  {
    title: 'War Pig',
    value: 'war_pig',
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
      </View>
    </DefaultView>
  );
}
