import React, { useCallback } from 'react';
import { ScrollView, View, Text } from 'react-native';
import DefaultView from '../../components/SafeAreaView';
import Header from '../../components/Header';
import TextBox from '../../components/TextBox';
import styles from './index.style';
import { WHITE_COLOR } from '../../styles/colors';
import ColorPicker from '../../components/ColorPicker';
import DropDown from '../../components/Dropdown/NativeDropdown';
import { DropdownItem } from '../../components/Dropdown/props';
import DurationPicker from '../../components/DurationPicker';
import CustomButton from '../../components/Button';
import { CustomFontText } from '../../components/Text';

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
      <ScrollView>
        <View style={styles.title}>
          <CustomFontText>
            <Text style={styles.titleText}>Create timer</Text>
          </CustomFontText>
        </View>
        <View style={styles.container}>
          <View style={styles.spaced}>
            <Header>Select name</Header>
            <TextBox placeholder="Enter time" />
          </View>

          <View style={styles.spaced}>
            <Header>Select color</Header>
            <ColorPicker />
          </View>

          <View style={styles.spaced}>
            <Header>Select alarm</Header>
            <DropDown title="Choose alarm" items={items} onItemSelected={onItemSelected} />
          </View>

          <View style={styles.spaced}>
            <Header>Select duration</Header>
            <DurationPicker />
          </View>

          <View style={styles.spaced}>
            <CustomButton text="Create timer" type="primary" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    </DefaultView>
  );
}
