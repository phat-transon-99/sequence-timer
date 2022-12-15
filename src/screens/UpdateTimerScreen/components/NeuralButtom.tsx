import React from 'react';
import CustomButton from '../../../components/CustomButton';
import { GRAY_COLOR } from '../../../styles/colors';

type Props = {
  title: string,
  onPress: () => void;
};

export default function NeuralButton({ title, onPress }: Props): JSX.Element {
  return (
    <CustomButton text={title} onPress={onPress} color={GRAY_COLOR} />
  );
}
