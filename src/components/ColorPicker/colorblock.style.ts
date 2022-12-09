import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR, TRANSPARENT_COLOR } from '../../styles/colors';
import { BORDERRADIUS_XSMALL, PADDING_USMALL } from '../../styles/dims';

export default (color: string, isSelected: boolean) => StyleSheet.create({
  colorContainer: {
    borderColor: isSelected ? PRIMARY_COLOR : TRANSPARENT_COLOR,
    borderRadius: BORDERRADIUS_XSMALL,
    borderStyle: 'dotted',
    borderWidth: 4,
    padding: PADDING_USMALL,
  },
  colorBlock: {
    backgroundColor: color,
    borderRadius: BORDERRADIUS_XSMALL,
    height: 45,
    width: 45,
  },
});
