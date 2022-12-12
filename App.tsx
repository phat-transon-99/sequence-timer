import React from 'react';
import { Provider } from 'react-redux';
import useCombineBooleanHooks from './src/hooks/combine';
import useLoadFont from './src/hooks/fonts';
import HomeScreen from './src/screens/HomeScreen';
import store from './src/store';

export default function App() {
  // @ts-ignore Disable ts error on this line
  const isAppReady = useCombineBooleanHooks(useLoadFont);

  return (
    isAppReady
    && (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
    )
  );
}
