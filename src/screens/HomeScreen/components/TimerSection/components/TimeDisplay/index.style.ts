import { StyleSheet } from 'react-native';
import { WHITE_COLOR } from '../../../../../../styles/colors';
import { MARGIN_XLARGE } from '../../../../../../styles/dims';
import { FONTSIZE_ULARGE } from '../../../../../../styles/fonts';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: MARGIN_XLARGE,
    height: '30%',
    transform: [
      { rotate: '-90deg' },
    ],
  },
  text: {
    color: WHITE_COLOR,
    fontSize: FONTSIZE_ULARGE,
  },
  textContainer: {
    transform: [
      { rotate: '90deg' },
    ],
  },
});
