//firebase imports
// import "@react-native-firebase/app";
// import firebase from "@react-native-firebase/app";
// import "@react-native-firebase/auth";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { firebaseConfig } from "./services/firebaseConfig";

//App imports
import "react-native-gesture-handler";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";

import * as SplashScreen from "expo-splash-screen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

//Screens import
import Academics from "./screens/Academics";
import Admissions from "./screens/Admissions";
import PaymentScreen from "./screens/payment-Screen";
import FeePayment from "./screens/FeePayment";

//Navigators import
import UGStackNavigator from "./NavigationContainers/UGStack";
import PGStackNavigator from "./NavigationContainers/PGStack";
import DrawerStackNavigator from "./NavigationContainers/Drawer";
import HeaderRight from "./components/headerRight";

//Initialise the firebase
// console.log("before firebase");
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
//   console.log("initialised")
// }
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

//App code begins
const Stack = createNativeStackNavigator();

const kle = require("./assets/images/kleit_logo.png");

//Splashscreen timeout control code
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

//Common Properties to be used throughout the app
const commonOptions = {
  headerStyle: {
    backgroundColor: "#735029",
  },
  headerTintColor: "#D4D4D4",
  statusBarColor: "#735029",
};

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
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
              statusBarColor: "#735029",
            }}
            component={DrawerStackNavigator}
          />

          <Stack.Screen
            name="Academics"
            options={{
              ...commonOptions,
              headerRight: () => <HeaderRight />,
            }}
            component={Academics}
          />

          <Stack.Screen
            name="Admissions"
            options={{
              ...commonOptions,
              statusBarColor: "#735029",
              headerRight: () => <HeaderRight />,
            }}
            component={Admissions}
          />

          <Stack.Screen
            name="PaymentScreen"
            options={{
              title: "KLEIT Payment",
              ...commonOptions,
              headerRight: () => <HeaderRight />,
            }}
            component={PaymentScreen}
          />
          <Stack.Screen
            name="UGStack"
            options={{
              title: "UG Courses Offered",
              ...commonOptions,
              headerRight: () => <HeaderRight />,
            }}
            component={UGStackNavigator}
          />
          <Stack.Screen
            name="PGStack"
            options={{
              title: "PG Courses Offered",
              ...commonOptions,
              headerRight: () => <HeaderRight />,
            }}
            component={PGStackNavigator}
          />
          <Stack.Screen
            name="FeePayment"
            options={{
              title: "Fee Structure",
              ...commonOptions,
              headerRight: () => <HeaderRight />,
            }}
            component={FeePayment}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
