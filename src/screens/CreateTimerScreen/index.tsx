import React from 'react';
import { View } from 'react-native';
import DefaultView from '../../components/DefaultView';
import Header from '../../components/Header';
import TextBox from '../../components/TextBox';
import styles from './index.style';
import { WHITE_COLOR } from '../../styles/colors';
import ColorPicker from '../../components/ColorPicker';

export default function CreateTimerScreen(): JSX.Element {
  return (
    <DefaultView color={WHITE_COLOR}>
      <View style={styles.container}>
        <Header>Select name</Header>
        <TextBox placeholder="Enter time" />

        <Header>Select color</Header>
        <ColorPicker />
      </View>
    </DefaultView>
  );
}
