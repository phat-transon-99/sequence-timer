import { StyleSheet } from 'react-native';

export default (color: string) => StyleSheet.create({
  container: {
    height: '90%',
  },
  contentContainer: {
    alignItems: 'center',
    backgroundColor: color,
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '80%',
  },
});
