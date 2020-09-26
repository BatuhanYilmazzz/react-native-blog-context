import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import AnotherScreen from './src/screens/AnotherScreen';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer initialRouteName='Index'>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Index' component={IndexScreen} />
          <Stack.Screen name='Another' component={AnotherScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
