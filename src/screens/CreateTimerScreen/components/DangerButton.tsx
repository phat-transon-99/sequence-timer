import React from 'react';
import CustomButton from '../../../components/CustomButton';
import { RED_COLOR, WHITE_COLOR } from '../../../styles/colors';

type Props = {
  title: string,
  onPress: () => void;
};

export default function PrimaryButton({ title, onPress }: Props): JSX.Element {
  return (
    <CustomButton text={title} onPress={onPress} color={RED_COLOR} textColor={WHITE_COLOR} />
  );
}
