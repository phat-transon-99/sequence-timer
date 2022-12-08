import React from 'react';
import { View, StyleSheet } from 'react-native';
import { whiteColor } from '../../../../styles/colors';

type CardProps = {
  children?: React.ReactNode
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: whiteColor,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex: 2.5,
  },
});

function BottomCard({ children }: CardProps): JSX.Element {
  return (
    <View style={styles.card}>{ children }</View>
  );
}

export default BottomCard;
