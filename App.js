import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);

import Home from "./screens/Home";
import Academics from "./screens/Academics";
import Admissions from "./screens/Admissions";
import { Alert, Image, Linking, TouchableOpacity } from "react-native";

const kle = require("./assets/images/kleit_logo.png");
// const kle = require("./assets/images/KLE-SOCIETY-LOGO.png");

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: "Home Screen",
            headerStyle: {
              backgroundColor: "#735029",
            },  
            headerTintColor: "#D4D4D4",
            headerRight: () => (
              <TouchableOpacity onPress={() => Linking.openURL('https://kleit.ac.in/')}>
              <Image source={kle} style={{width: 50, height: 50 }}/>
              </TouchableOpacity>
            )
          }}
          component={Home}
        />
        <Stack.Screen
          name="Academics"
          options={{
            headerStyle: {
              backgroundColor: "#735029",
            },
            headerTintColor: "#D4D4D4"
          }}
          component={Academics}
        />
        <Stack.Screen
          name="Admissions"
          options={{
            headerStyle: {
              backgroundColor: "#735029",
            },
            headerTintColor: "#D4D4D4"
          }}
          component={Admissions}
        />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
