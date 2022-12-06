import React from 'react';
import useCombineBooleanHooks from './src/hooks/combine';
import useLoadFont from './src/hooks/fonts';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  const isAppReady = useCombineBooleanHooks(useLoadFont);

  return (
    isAppReady && <HomeScreen />
  );
}
