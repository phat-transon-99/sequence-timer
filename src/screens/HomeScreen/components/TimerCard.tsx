import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import CustomFontText from '../../../components/Text';
import { blackColor, whiteColor } from '../../../styles/colors';
import formatTimeStandard from '../../../utils/time';

type TimeCardProps = {
  name: string,
  icon: string,
  color: string,
  timeInSeconds: number,
  onPress: () => void,
  onStartPress: () => void
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  timeText: {
    color: whiteColor,
    fontSize: 15,
  },
  timerIcon: {
    fontSize: 40,
  },
  playIcon: {
    padding: 20,
    borderRadius: 100,
  },
});

function TimerCard({
  name, icon, color, timeInSeconds, onPress, onStartPress,
}: TimeCardProps): JSX.Element {
  const styles = createStyle(color);

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={onPress}>
      <View style={styles.leftContainer}>
        <Text style={styles.timerIcon}>{ icon }</Text>

        <View style={styles.textContainer}>
          <CustomFontText>
            <Text style={styles.headerText}>{ name }</Text>
          </CustomFontText>

          <CustomFontText>
            <Text style={styles.timeText}>{ formatTimeStandard(timeInSeconds) }</Text>
          </CustomFontText>
        </View>
      </View>

      <TouchableOpacity style={styles.playIcon} onPress={onStartPress}>
        <FontAwesome5 name="play" size={28} color={whiteColor} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default TimerCard;
