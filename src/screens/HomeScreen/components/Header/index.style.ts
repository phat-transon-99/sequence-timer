import { StyleSheet } from 'react-native';
import { primaryColor } from '../../../../styles/colors';
import { FONTSIZE_LARGE } from '../../../../styles/fonts';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 35,
  },
  text: {
    fontSize: FONTSIZE_LARGE,
  },
  button: {
    backgroundColor: primaryColor,
    borderRadius: 10,
  },
  icon: {
    paddingLeft: 2,
    textAlign: 'center',
  },
});
