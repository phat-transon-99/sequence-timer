import { StyleSheet } from 'react-native';
import { BORDERRADIUS_XSMALL } from '../../styles/dims';

export default (color: string) => StyleSheet.create({
  colorBlock: {
    backgroundColor: color,
    borderRadius: BORDERRADIUS_XSMALL,
    height: 45,
    width: 45,
  },
});
