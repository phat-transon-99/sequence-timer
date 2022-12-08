import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { CustomFontText, CustomFontTextBold } from '../../../components/Text';
import { blackColor, whiteColor } from '../../../styles/colors';
import formatTimeStandard from '../../../utils/time';
import Timer from '../../../models/Timer';
import { FONTSIZE_MEDIUM, FONTSIZE_SMALL, FONTSIZE_XLARGE } from '../../../styles/fonts';

export type TimerCardProps = Timer & {
  onPress?: () => void,
  onStartPress?: () => void
};

const createStyle = (color: string) => StyleSheet.create({
  container: {
    alignItems: 'center',
    elevation: 5,
    backgroundColor: color,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 20,
    marginBottom: 15,
    justifyContent: 'space-between',
    shadowColor: blackColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: '100%',
  },
  leftContainer: {
    flexDirection: 'row',
  },
  textContainer: {
    marginHorizontal: 15,
  },
  headerText: {
    color: whiteColor,
    fontSize: FONTSIZE_MEDIUM,
  },
  timeText: {
    color: whiteColor,
    fontSize: FONTSIZE_SMALL,
  },
  timerIcon: {
    fontSize: FONTSIZE_XLARGE,
  },
  playIcon: {
    padding: 20,
    borderRadius: 100,
  },
});

function TimerCard({
  name, icon, color, timeInSeconds, onPress, onStartPress,
}: TimerCardProps): JSX.Element {
  const styles = createStyle(color);

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={onPress}>
      <View style={styles.leftContainer}>
        <Text style={styles.timerIcon}>{ icon }</Text>

        <View style={styles.textContainer}>
          <View style={{ marginBottom: 5 }}>
            <CustomFontTextBold>
              <Text style={styles.headerText}>{ name }</Text>
            </CustomFontTextBold>
          </View>

          <CustomFontText>
            <Text style={styles.timeText}>{ formatTimeStandard(timeInSeconds) }</Text>
          </CustomFontText>
        </View>
      </View>

      <TouchableOpacity style={styles.playIcon} onPress={onStartPress}>
        <FontAwesome5 name="play" size={24} color={whiteColor} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default TimerCard;
