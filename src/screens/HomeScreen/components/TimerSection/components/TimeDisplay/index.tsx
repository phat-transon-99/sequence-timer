import React from 'react';
import { Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { CustomFontText } from '../../../../../../components/Text';
import { TRANSPARENT_COLOR, WHITE_COLOR } from '../../../../../../styles/colors';
import { formatTimeStandard } from '../../../../../../utils/time';
import styles from './index.style';
import { TIME_DISPLAY_WIDTH, TIME_DISPLAY_HEIGHT } from '../../../../../../constants/dims';

type Props = {
  duration: number,
  percentage: number
};

export default function TimeDisplay({ duration, percentage }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={{ position: 'absolute' }}>
        <Svg height={TIME_DISPLAY_HEIGHT} width={TIME_DISPLAY_WIDTH} viewBox="0 0 120 120">
          <Circle
            cx="60"
            cy="60"
            r="50"
            stroke={WHITE_COLOR}
            strokeWidth="8"
            strokeDasharray={314}
            strokeDashoffset={314 * percentage}
            fill={TRANSPARENT_COLOR}
          />
        </Svg>
      </View>

      <View style={styles.textContainer}>
        <CustomFontText>
          <Text style={styles.text}>{ formatTimeStandard(duration) }</Text>
        </CustomFontText>
      </View>
    </View>
  );
}
