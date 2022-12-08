import React from 'react';
import useCombineBooleanHooks from './src/hooks/combine';
import useLoadFont from './src/hooks/fonts';
import CreateTimerScreen from './src/screens/CreateTimerScreen';

export default function App() {
  // @ts-ignore Disable ts error on this line
  const isAppReady = useCombineBooleanHooks(useLoadFont);

  return (
    isAppReady && <CreateTimerScreen />
  );
}
