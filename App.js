import "react-native-gesture-handler";
import React, {useEffect} from "react";
import {
  Provider as PaperProvider,
} from "react-native-paper";

import * as SplashScreen from 'expo-splash-screen';

import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";

import Academics from "./screens/Academics";
import Admissions from "./screens/Admissions";
import PaymentScreen from "./screens/payment-Screen";

import UGStackNavigator from "./NavigationContainers/UGStack";
import PGStackNavigator from "./NavigationContainers/PGStack";
import DrawerStackNavigator from "./NavigationContainers/Drawer";

const Stack = createNativeStackNavigator();


SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const commonOptions = {
  headerStyle: {
    backgroundColor: "#735029",
  },
  headerTintColor: "#D4D4D4",
  statusBarColor: "black",
};

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Drawer"
            options={{
              headerShown: false,
            }}
            component={DrawerStackNavigator}
          />
          <Stack.Screen
            name="Academics"
            options={{
             ...commonOptions,
            }}
            component={Academics}
          />
          <Stack.Screen
            name="Admissions"
            options={{
              ...commonOptions,
            }}
            component={Admissions}
          />
          <Stack.Screen
            name="PaymentScreen"
            options={{
              title:"KLEIT Payment",
              ...commonOptions
            }}
            component={PaymentScreen}
          />
          <Stack.Screen
            name="UGStack"
            options={{
              title: "UG Courses Offered",
              ...commonOptions
            }}
            component={UGStackNavigator}
          />
          <Stack.Screen
            name="PGStack"
            options={{
              title: "PG Courses Offered",
              ...commonOptions
            }}
            component={PGStackNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
