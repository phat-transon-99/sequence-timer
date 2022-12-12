import React, { useMemo } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

type Props = {
  children: React.ReactNode
};

export default function CustomBottomSheet({ children }: Props): JSX.Element {
  const snapPoints = useMemo(() => ['15%', '75%'], []);
  return (
    <BottomSheet index={1} snapPoints={snapPoints}>
      { children }
    </BottomSheet>
  );
}
