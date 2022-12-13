import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useCombineBooleanHooks from './src/hooks/combine';
import useLoadFont from './src/hooks/fonts';
import HomeScreen from './src/screens/HomeScreen';
import CreateTimerScreen from './src/screens/CreateTimerScreen';
import store from './src/store';
import useDatabase from './src/hooks/database';

// Create stack navigation
const Stack = createNativeStackNavigator();

export default function App() {
  const isAppReady = useCombineBooleanHooks(
    // @ts-ignore Disable ts error on this line
    useLoadFont,
    useDatabase,
  );

  return (
    isAppReady
    && (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CreateTimer" component={CreateTimerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    )
  );
}
