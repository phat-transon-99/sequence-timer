import React, { useCallback, useRef } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
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
import { useAppDispatch } from '../../hooks/redux';
import { createNewTimer } from '../../features/MangeTimer/thunk';

export default function CreateTimerScreen(): JSX.Element {
  // Navigation
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  // Dispatch
  const dispatch = useAppDispatch();

  // State
  const name = useRef('');
  const color = useRef('#F77F00');
  const duration = useRef(0);

  // Events
  const cancel = useCallback(() => {
    if (navigation.canGoBack()) { navigation.goBack(); }
  }, []);

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

  const onCreateChosen = useCallback(() => {
    // eslint-disable-next-line no-console
    dispatch(
      createNewTimer({
        id: 0,
        name: name.current,
        color: color.current,
        duration: duration.current,
      }),
    );

    // After creating a timer -> Go back
    navigation.goBack();
  }, []);

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
            <TextBox placeholder="Enter time" onChangeText={onNameChosen} />
          </View>

          <View style={styles.spaced}>
            <Header>Select color</Header>
            <ColorPicker onColorChosen={onColorChosen} />
          </View>

          <View style={styles.spaced}>
            <Header>Select duration</Header>
            <DurationPicker value={duration.current} onDurationChosen={onDurationChosen} />
          </View>

          <View style={styles.buttonSpaced}>
            <PrimaryButton title="Create timer" onPress={onCreateChosen} />
          </View>

          <View style={styles.spaced}>
            <DangerButton title="Cancel" onPress={cancel} />
          </View>
        </View>
      </ScrollView>
    </DefaultView>
  );
}
