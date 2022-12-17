import React from 'react';
import { View, Text } from 'react-native';
import { CustomFontTextBold } from '../../../../../../components/Text';
import styles from './index.style';

type Props = {
  name: string,
};

export default function NameDisplay({ name }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <CustomFontTextBold>
        <Text style={styles.text}>
          ⏲️
          {' '}
          { name }
        </Text>
      </CustomFontTextBold>
    </View>
  );
}
