import React, { useCallback, useRef } from 'react';
import { ScrollView, View, Text } from 'react-native';
import {
  useNavigation, NavigationProp, ParamListBase, useRoute,
} from '@react-navigation/native';
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
import { ColorType } from '../../components/ColorPicker/colorblock';
import NeuralButton from './components/NeuralButtom';
import Timer from '../../models/Timer';
import { useAppDispatch } from '../../hooks/redux';
import { deleteTimer, updateTimer } from '../../features/MangeTimer/thunk';

export default function UpdateTimerScreen(): JSX.Element {
  // Navigation
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { params: timer } = useRoute() as { params: Timer };

  // Dispatch delete timer and update timer
  const dispatch = useAppDispatch();

  // State
  const name = useRef(timer.name);
  const color = useRef(timer.color);
  const duration = useRef(timer.duration);

  // Events
  const onNameChosen = useCallback((timerName: string) => {
    // eslint-disable-next-line no-console
    name.current = timerName;
  }, []);

  const onColorChosen = useCallback((timerColor: ColorType) => {
    // eslint-disable-next-line no-console
    color.current = timerColor;
  }, []);

  const onDurationChosen = useCallback((timerDuration: number) => {
    // eslint-disable-next-line no-console
    duration.current = timerDuration;
  }, []);

  const onGoBackChosen = useCallback(() => {
    // After creating a timer -> Go back
    navigation.goBack();
  }, []);

  const onDeleteTimer = useCallback(() => {
    dispatch(deleteTimer(timer.id));
    navigation.goBack();
  }, []);

  const onUpdateTimer = useCallback(() => {
    dispatch(updateTimer({
      id: timer.id,
      name: name.current,
      color: color.current,
      duration: duration.current,
    }));
    navigation.goBack();
  }, []);

  return (
    <DefaultView color={WHITE_COLOR}>
      <ScrollView>
        <View style={styles.title}>
          <CustomFontText>
            <Text style={styles.titleText}>Update timer</Text>
          </CustomFontText>
        </View>
        <View style={styles.container}>
          <View style={styles.spaced}>
            <Header>Select name</Header>
            <TextBox value={name.current} placeholder="Enter time" onChangeText={onNameChosen} />
          </View>

          <View style={styles.spaced}>
            <Header>Select color</Header>
            <ColorPicker onColorChosen={onColorChosen} value={timer.color as ColorType} />
          </View>

          <View style={styles.spaced}>
            <Header>Select duration</Header>
            <DurationPicker value={timer.duration} onDurationChosen={onDurationChosen} />
          </View>

          <View style={styles.buttonSpaced}>
            <PrimaryButton title="Update timer" onPress={onUpdateTimer} />
          </View>

          <View style={styles.buttonSpaced}>
            <DangerButton title="Delete timer" onPress={onDeleteTimer} />
          </View>

          <View style={styles.spaced}>
            <NeuralButton title="Cancel" onPress={onGoBackChosen} />
          </View>
        </View>
      </ScrollView>
    </DefaultView>
  );
}
