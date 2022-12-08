import { StyleSheet } from 'react-native';
import { FONTSIZE_MEDIUM, FONTSIZE_SMALL, FONTSIZE_XLARGE } from '../../../../styles/fonts';
import { BLACK_COLOR, WHITE_COLOR } from '../../../../styles/colors';
import {
  BORDERRADIUS_ULARGE, BORDERRADIUS_XSMALL, PADDING_MEDIUM, PADDING_SMALL,
} from '../../../../styles/dims';

export default (color: string) => StyleSheet.create({
  container: {
    alignItems: 'center',
    elevation: 5,
    backgroundColor: color,
    borderRadius: BORDERRADIUS_XSMALL,
    flexDirection: 'row',
    padding: PADDING_SMALL,
    marginBottom: 15,
    justifyContent: 'space-between',
    shadowColor: BLACK_COLOR,
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
    color: WHITE_COLOR,
    fontSize: FONTSIZE_MEDIUM,
  },
  timeText: {
    color: WHITE_COLOR,
    fontSize: FONTSIZE_SMALL,
  },
  timerIcon: {
    fontSize: FONTSIZE_XLARGE,
  },
  playIcon: {
    padding: PADDING_MEDIUM,
    borderRadius: BORDERRADIUS_ULARGE,
  },
});
