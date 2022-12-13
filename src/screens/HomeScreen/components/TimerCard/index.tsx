import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { CustomFontText, CustomFontTextBold } from '../../../../components/Text';
import { WHITE_COLOR } from '../../../../styles/colors';
import { formatTimeStandard } from '../../../../utils/time';
import Timer from '../../../../models/Timer';
import createStyle from './index.style';

export type TimerCardProps = Timer & {
  onPress?: () => void,
  onStartPress?: () => void
};

function TimerCard({
  name, color, duration, onPress, onStartPress,
}: TimerCardProps): JSX.Element {
  const styles = createStyle(color);

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={onPress}>
      <View style={styles.leftContainer}>
        <Text style={styles.timerIcon}>⏰</Text>

        <View style={styles.textContainer}>
          <View style={{ marginBottom: 5 }}>
            <CustomFontTextBold>
              <Text style={styles.headerText}>{ name }</Text>
            </CustomFontTextBold>
          </View>

          <CustomFontText>
            <Text style={styles.timeText}>{ formatTimeStandard(duration) }</Text>
          </CustomFontText>
        </View>
      </View>

      <TouchableOpacity style={styles.playIcon} onPress={onStartPress}>
        <FontAwesome5 name="play" size={24} color={WHITE_COLOR} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default TimerCard;
