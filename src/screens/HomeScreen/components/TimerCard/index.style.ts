import { StyleSheet } from 'react-native';
import { FONTSIZE_MEDIUM, FONTSIZE_SMALL, FONTSIZE_XLARGE } from '../../../../styles/fonts';
import { blackColor, whiteColor } from '../../../../styles/colors';

export default (color: string) => StyleSheet.create({
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
