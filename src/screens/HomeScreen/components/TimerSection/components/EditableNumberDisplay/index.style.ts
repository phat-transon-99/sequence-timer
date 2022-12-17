import { StyleSheet } from 'react-native';
import { TRANSPARENT_COLOR, TRANSPARENT_WHITE_COLOR, WHITE_COLOR } from '../../../../../../styles/colors';
import { FONTSIZE_ULARGE } from '../../../../../../styles/fonts';

export default StyleSheet.create({
  container: {

  },
  textInput: {
    color: WHITE_COLOR,
    fontSize: FONTSIZE_ULARGE,
  },
  textInputFocus: {
    backgroundColor: TRANSPARENT_WHITE_COLOR,
  },
  textInputBlur: {
    backgroundColor: TRANSPARENT_COLOR,
  },
});
