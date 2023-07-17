import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './Home';
import Page2 from './Page2';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name='Home'
            title='Home Screen'
            component={Home}
        />
        <Stack.Screen
            name='Page2'
            //title = 'Second Screen'
            component={Page2}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

