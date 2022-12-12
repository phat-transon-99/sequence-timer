import React from 'react';
import CustomButton from '../../../components/CustomButton';
import { PRIMARY_COLOR } from '../../../styles/colors';

type Props = {
  title: string,
  onPress: () => void;
};

export default function PrimaryButton({ title, onPress }: Props): JSX.Element {
  return (
    <CustomButton text={title} onPress={onPress} color={PRIMARY_COLOR} />
  );
}
