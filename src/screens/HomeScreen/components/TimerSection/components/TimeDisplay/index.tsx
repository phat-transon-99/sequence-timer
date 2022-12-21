import React from 'react';
import { Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { CustomFontText } from '../../../../../../components/Text';
import { TRANSPARENT_COLOR, WHITE_COLOR } from '../../../../../../styles/colors';
import { formatTimeStandard } from '../../../../../../utils/time';
import styles from './index.style';
import { TIME_DISPLAY_WIDTH, TIME_DISPLAY_HEIGHT } from '../../../../../../constants/dims';

type Props = {
  duration: number
};

export default function TimeDisplay({ duration }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={{ position: 'absolute' }}>
        <Svg height={TIME_DISPLAY_HEIGHT} width={TIME_DISPLAY_WIDTH} viewBox="0 0 100 100">
          <Circle cx="50" cy="50" r="40" stroke={WHITE_COLOR} strokeWidth="8" fill={TRANSPARENT_COLOR} />
        </Svg>
      </View>

      <CustomFontText>
        <Text style={styles.text}>{ formatTimeStandard(duration) }</Text>
      </CustomFontText>
    </View>
  );
}
