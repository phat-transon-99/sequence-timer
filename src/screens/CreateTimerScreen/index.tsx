import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import DefaultView from '../../components/SafeAreaView';
import Header from '../../components/Header';
import TextBox from '../../components/TextBox';
import styles from './index.style';
import { WHITE_COLOR } from '../../styles/colors';
import ColorPicker from '../../components/ColorPicker';
import DurationPicker from '../../components/DurationPicker';
import { CustomFontText } from '../../components/Text';
import PrimaryButton from './components/PrimaryButton';
import DangerButton from './components/DangerButton';

export default function CreateTimerScreen(): JSX.Element {
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
            <Header>Select duration</Header>
            <DurationPicker />
          </View>

          <View style={styles.buttonSpaced}>
            <PrimaryButton title="Create timer" onPress={() => {}} />
          </View>

          <View style={styles.spaced}>
            <DangerButton title="Cancel" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    </DefaultView>
  );
}
