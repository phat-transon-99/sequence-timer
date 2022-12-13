import React, { useCallback } from 'react';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import Header from '../Header';
import { CREATE_TIMER_SCREEN } from '../../../../constants/navigation.screen';

export default function SmartHeader(): JSX.Element {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const navigateToAddScreen = useCallback(() => {
    navigation.navigate(CREATE_TIMER_SCREEN);
  }, []);

  return (
    <Header onAddClick={navigateToAddScreen} />
  );
}
