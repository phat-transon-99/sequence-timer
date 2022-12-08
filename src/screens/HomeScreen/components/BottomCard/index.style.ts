import { StyleSheet } from 'react-native';
import { WHITE_COLOR } from '../../../../styles/colors';
import { BORDERRADIUS_LARGE } from '../../../../styles/dims';

export default StyleSheet.create({
  card: {
    backgroundColor: WHITE_COLOR,
    borderTopLeftRadius: BORDERRADIUS_LARGE,
    borderTopRightRadius: BORDERRADIUS_LARGE,
    flex: 2.5,
  },
});
