import { StyleSheet } from 'react-native';
import { GRAY_COLOR } from '../../styles/colors';
import { BORDERRADIUS_XSMALL, PADDING_SMALL, PADDING_XSMALL } from '../../styles/dims';
import { FONTSIZE_MEDIUM } from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: GRAY_COLOR,
    borderRadius: BORDERRADIUS_XSMALL,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: PADDING_SMALL,
    paddingVertical: PADDING_XSMALL,
    width: '100%',
  },
  text: {
    color: GRAY_COLOR,
    fontSize: FONTSIZE_MEDIUM,
  },
  icon: {
  },
});
