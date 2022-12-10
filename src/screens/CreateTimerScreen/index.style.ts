import { StyleSheet } from 'react-native';
import {
  MARGIN_MEDIUM, MARGIN_SMALL, PADDING_SMALL,
} from '../../styles/dims';
import {
  FONTFAMILY_SEMIBOLD, FONTSIZE_LARGE, FONTWEIGHT_SEMIBOLD,
} from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: PADDING_SMALL,
    paddingVertical: PADDING_SMALL,
  },
  spaced: {
    marginBottom: MARGIN_MEDIUM,
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: MARGIN_SMALL,
    marginTop: MARGIN_MEDIUM,
  },
  titleText: {
    fontFamily: FONTFAMILY_SEMIBOLD,
    fontSize: FONTSIZE_LARGE,
    fontWeight: FONTWEIGHT_SEMIBOLD,
  },
});
