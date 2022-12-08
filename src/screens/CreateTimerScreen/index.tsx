import React from 'react';
import { View } from 'react-native';
import DefaultView from '../../components/DefaultView';
import Header from '../../components/Header';
import styles from './index.style';

export default function CreateTimerScreen(): JSX.Element {
  return (
    <DefaultView>
      <View style={styles.container}>
        <Header>Select time</Header>
      </View>
    </DefaultView>
  );
}
