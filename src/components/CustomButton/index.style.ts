import { StyleSheet } from 'react-native';
import {
  BLACK_COLOR,
} from '../../styles/colors';
import { BORDERRADIUS_XSMALL, PADDING_SMALL } from '../../styles/dims';
import { FONTFAMILY_SEMIBOLD, FONTSIZE_SMALL, FONTWEIGHT_SEMIBOLD } from '../../styles/fonts';

export default (color: string, textColor: string) => StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: color,
    borderRadius: BORDERRADIUS_XSMALL,
    elevation: 5,
    justifyContent: 'center',
    paddingVertical: PADDING_SMALL,
    shadowColor: BLACK_COLOR,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: '100%',
  },
  text: {
    color: textColor,
    fontFamily: FONTFAMILY_SEMIBOLD,
    fontSize: FONTSIZE_SMALL,
    fontWeight: FONTWEIGHT_SEMIBOLD,
  },
});
