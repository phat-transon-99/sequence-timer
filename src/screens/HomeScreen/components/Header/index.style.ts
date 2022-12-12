import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../../../../styles/colors';
import {
  BORDERRADIUS_SMALL, MARGIN_LARGE, MARGIN_MEDIUM, MARGIN_XLARGE,
} from '../../../../styles/dims';
import { FONTSIZE_LARGE } from '../../../../styles/fonts';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: MARGIN_LARGE,
    marginTop: MARGIN_MEDIUM,
    marginBottom: MARGIN_XLARGE,
  },
  text: {
    fontSize: FONTSIZE_LARGE,
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: BORDERRADIUS_SMALL,
  },
  icon: {
    paddingLeft: 2,
    textAlign: 'center',
  },
});
