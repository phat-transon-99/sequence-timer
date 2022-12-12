import React, { useMemo, forwardRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

type Props = {
  children: React.ReactNode
};

export default forwardRef<BottomSheet, Props>(({ children }: Props, ref) => {
  const snapPoints = useMemo(() => ['15%', '75%'], []);
  return (
    <BottomSheet ref={ref} index={1} snapPoints={snapPoints}>
      { children }
    </BottomSheet>
  );
});
