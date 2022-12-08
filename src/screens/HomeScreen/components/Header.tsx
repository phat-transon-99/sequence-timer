import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CustomFontText } from '../../../components/Text';
import { primaryColor, whiteColor } from '../../../styles/colors';
import { FONTSIZE_LARGE } from '../../../styles/fonts';

type HeaderProps = {
  onAddClick: () => void
};

const styles = StyleSheet.create({
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

function AddButton({ onAddClick }: HeaderProps): JSX.Element {
  return (
    <TouchableOpacity style={styles.button} onPress={onAddClick}>
      <Ionicons name="add" size={36} color={whiteColor} style={styles.icon} />
    </TouchableOpacity>
  );
}

function Header({ onAddClick }: HeaderProps): JSX.Element {
  return (
    <View style={styles.header}>
      <CustomFontText>
        <Text style={styles.text}>All timers</Text>
      </CustomFontText>
      <AddButton onAddClick={onAddClick} />
    </View>
  );
}

export default Header;
