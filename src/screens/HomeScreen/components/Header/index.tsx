import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CustomFontText } from '../../../../components/Text';
import { WHITE_COLOR } from '../../../../styles/colors';
import styles from './index.style';

type HeaderProps = {
  onAddClick: () => void
};

function AddButton({ onAddClick }: HeaderProps): JSX.Element {
  return (
    <TouchableOpacity style={styles.button} onPress={onAddClick}>
      <Ionicons name="add" size={36} color={WHITE_COLOR} style={styles.icon} />
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
