import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import useCombineBooleanHooks from './src/hooks/combine';
import useLoadFont from './src/hooks/fonts';
import HomeScreen from './src/screens/HomeScreen';
import CreateTimerScreen from './src/screens/CreateTimerScreen';
import UpdateTimerScreen from './src/screens/UpdateTimerScreen';
import useDatabase from './src/hooks/database';
import { store } from './src/store';
import { CREATE_TIMER_SCREEN, HOME_SCREEN, UPDATE_TIMER_SCREEN } from './src/constants/navigation.screen';

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
      ? (
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
              <Stack.Screen name={CREATE_TIMER_SCREEN} component={CreateTimerScreen} />
              <Stack.Screen name={UPDATE_TIMER_SCREEN} component={UpdateTimerScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      ) : null
  );
}
