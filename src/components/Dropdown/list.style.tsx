import { StyleSheet } from 'react-native';
import { GRAY_COLOR, WHITE_COLOR } from '../../styles/colors';
import {
  BORDERRADIUS_SMALL, PADDING_MEDIUM, PADDING_SMALL, PADDING_XSMALL,
} from '../../styles/dims';
import { FONTSIZE_MEDIUM } from '../../styles/fonts';

export default StyleSheet.create({
  listItem: {
    borderBottomWidth: 2,
    borderBottomColor: GRAY_COLOR,
    paddingVertical: PADDING_XSMALL,
  },
  listItemText: {
    color: GRAY_COLOR,
    fontSize: FONTSIZE_MEDIUM,
  },
  list: {
    width: '90%',
    height: '60%',
    backgroundColor: WHITE_COLOR,
    borderRadius: BORDERRADIUS_SMALL,
    paddingHorizontal: PADDING_MEDIUM,
    paddingVertical: PADDING_SMALL,
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
  },
});
