import { StyleSheet } from 'react-native';
import { BORDERRADIUS_XSMALL, MARGIN_SMALL } from '../../styles/dims';

export default (color: string) => StyleSheet.create({
  colorBlock: {
    backgroundColor: color,
    borderRadius: BORDERRADIUS_XSMALL,
    height: 45,
    marginRight: MARGIN_SMALL,
    width: 45,
  },
});
