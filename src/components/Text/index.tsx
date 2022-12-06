import React from 'react';
import { Text, StyleSheet } from 'react-native';

type CustomFontTextProps = {
  children: React.ReactNode
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins_400Regular',
  },
});

function CustomFontText({ children }: CustomFontTextProps): JSX.Element {
  return (
    <Text style={styles.text}>{ children }</Text>
  );
}

export default CustomFontText;
