import { StyleSheet } from 'react-native';
import { MARGIN_SMALL } from '../../styles/dims';
import {
  FONTFAMILY_SEMIBOLD, FONTSIZE_MEDIUM, FONTWEIGHT_SEMIBOLD,
} from '../../styles/fonts';

export default StyleSheet.create({
  header: {
    fontFamily: FONTFAMILY_SEMIBOLD,
    fontWeight: FONTWEIGHT_SEMIBOLD,
    fontSize: FONTSIZE_MEDIUM,
    marginBottom: MARGIN_SMALL,
  },
});
