import { StyleSheet } from 'react-native';
import { WHITE_COLOR } from '../../styles/colors';
import { PADDING_LARGE } from '../../styles/dims';

export default (color: string | undefined) => StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: PADDING_LARGE,
    backgroundColor: color || WHITE_COLOR,
  },
});
