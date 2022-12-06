import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import CustomFontText from '../../../components/Text';
import { blackColor, whiteColor } from '../../../styles/colors';
import formatTimeStandard from '../../../utils/time';

type TimeCardProps = {
  name: string,
  icon: string,
  color: string,
  timeInSeconds: number,
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
    shadowColor: blackColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: '100%',
  },
  textContainer: {
    marginHorizontal: 15,
  },
  header: {
    color: whiteColor,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  time: {
    color: whiteColor,
    fontSize: 15,
  },
  icon: {
    fontSize: 40,
  },
});

function TimerCard({
  name, icon, color, timeInSeconds,
}: TimeCardProps): JSX.Element {
  const styles = createStyle(color);

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.icon}>{ icon }</Text>

      <View style={styles.textContainer}>
        <CustomFontText>
          <Text style={styles.header}>{ name }</Text>
        </CustomFontText>

        <CustomFontText>
          <Text style={styles.time}>{ formatTimeStandard(timeInSeconds) }</Text>
        </CustomFontText>
      </View>

    </TouchableOpacity>
  );
}

export default TimerCard;
