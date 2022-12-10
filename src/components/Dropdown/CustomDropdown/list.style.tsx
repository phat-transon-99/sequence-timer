import { StyleSheet } from 'react-native';
import { GRAY_COLOR, TRANSPARENT_GRAY_COLOR, WHITE_COLOR } from '../../../styles/colors';
import {
  BORDERRADIUS_SMALL, MARGIN_SMALL, PADDING_XSMALL,
} from '../../../styles/dims';
import { FONTSIZE_SMALL } from '../../../styles/fonts';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  listItem: {
    borderBottomWidth: 2,
    borderBottomColor: TRANSPARENT_GRAY_COLOR,
    paddingVertical: PADDING_XSMALL,
  },
  listItemText: {
    color: GRAY_COLOR,
    fontSize: FONTSIZE_SMALL,
  },
  listWrapper: {
    backgroundColor: WHITE_COLOR,
    borderColor: GRAY_COLOR,
    borderWidth: 2,
    borderRadius: BORDERRADIUS_SMALL,
    height: 200,
    marginTop: MARGIN_SMALL,
    paddingHorizontal: PADDING_XSMALL,
  },
  list: {
    padding: PADDING_XSMALL,
  },
});
