import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CustomFontText } from '../../Text';
import styles from './selector.style';
import { GRAY_COLOR } from '../../../styles/colors';

type Props = {
  title: string,
  onPress: () => void
};

function Selector({ title, onPress }: Props): JSX.Element {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.4} onPress={onPress}>
      <CustomFontText>
        <Text style={styles.text}>{ title }</Text>
      </CustomFontText>

      <View>
        <MaterialIcons name="keyboard-arrow-down" size={24} color={GRAY_COLOR} />
      </View>
    </TouchableOpacity>
  );
}

export default Selector;
