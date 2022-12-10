import { StyleSheet } from 'react-native';
import {
  GRAY_COLOR, PRIMARY_COLOR, RED_COLOR, WHITE_COLOR,
} from '../../styles/colors';
import { BORDERRADIUS_XSMALL, PADDING_SMALL } from '../../styles/dims';
import { FONTFAMILY_SEMIBOLD, FONTSIZE_SMALL, FONTWEIGHT_SEMIBOLD } from '../../styles/fonts';

export type ButtonType = 'primary' | 'danger';

function mapTypeToColor(type: ButtonType): string {
  switch (type) {
    case 'primary':
      return PRIMARY_COLOR;
    case 'danger':
      return RED_COLOR;
    default:
      return GRAY_COLOR;
  }
}

export default (color: ButtonType) => StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: mapTypeToColor(color),
    borderRadius: BORDERRADIUS_XSMALL,
    justifyContent: 'center',
    paddingVertical: PADDING_SMALL,
  },
  text: {
    color: WHITE_COLOR,
    fontFamily: FONTFAMILY_SEMIBOLD,
    fontSize: FONTSIZE_SMALL,
    fontWeight: FONTWEIGHT_SEMIBOLD,
  },
});
