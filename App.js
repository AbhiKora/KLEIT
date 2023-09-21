import "react-native-gesture-handler";
import React from "react";
import { Image, Linking, TouchableOpacity } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import * as SplashScreen from "expo-splash-screen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";

import Academics from "./screens/Academics";
import Admissions from "./screens/Admissions";
import PaymentScreen from "./screens/payment-Screen";

import UGStackNavigator from "./NavigationContainers/UGStack";
import PGStackNavigator from "./NavigationContainers/PGStack";
import DrawerStackNavigator from "./NavigationContainers/Drawer";
import FeePayment from "./screens/FeePayment";

const Stack = createNativeStackNavigator();

const kle = require("./assets/images/KLELOGO.png");

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
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => Linking.openURL("https://kleit.ac.in/")}
                >
                  <Image
                    source={kle}
                    style={{
                      width: 50,
                      height: 50,
                      marginRight: 8,
                      marginTop: 4,
                    }}
                  />
                </TouchableOpacity>
              ),
            }}
            component={Academics}
          />
          <Stack.Screen
            name="Admissions"
            options={{
              ...commonOptions,
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => Linking.openURL("https://kleit.ac.in/")}
                >
                  <Image
                    source={kle}
                    style={{
                      width: 50,
                      height: 50,
                      marginRight: 8,
                      marginTop: 4,
                    }}
                  />
                </TouchableOpacity>
              ),
            }}
            component={Admissions}
          />
          <Stack.Screen
            name="PaymentScreen"
            options={{
              title: "KLEIT Payment",
              ...commonOptions,
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => Linking.openURL("https://kleit.ac.in/")}
                >
                  <Image
                    source={kle}
                    style={{
                      width: 50,
                      height: 50,
                      marginRight: 8,
                      marginTop: 4,
                    }}
                  />
                </TouchableOpacity>
              ),
            }}
            component={PaymentScreen}
          />
          <Stack.Screen
            name="UGStack"
            options={{
              title: "UG Courses Offered",
              ...commonOptions,
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => Linking.openURL("https://kleit.ac.in/")}
                >
                  <Image
                    source={kle}
                    style={{
                      width: 50,
                      height: 50,
                      marginRight: 8,
                      marginTop: 4,
                    }}
                  />
                </TouchableOpacity>
              ),
            }}
            component={UGStackNavigator}
          />
          <Stack.Screen
            name="PGStack"
            options={{
              title: "PG Courses Offered",
              ...commonOptions,
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => Linking.openURL("https://kleit.ac.in/")}
                >
                  <Image
                    source={kle}
                    style={{
                      width: 50,
                      height: 50,
                      marginRight: 8,
                      marginTop: 4,
                    }}
                  />
                </TouchableOpacity>
              ),
            }}
            component={PGStackNavigator}
          />
          <Stack.Screen
            name="FeePayment"
            options={{
              title: "Fee Structure",
              ...commonOptions,
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => Linking.openURL("https://kleit.ac.in/")}
                >
                  <Image
                    source={kle}
                    style={{
                      width: 50,
                      height: 50,
                      marginRight: 8,
                      marginTop: 4,
                    }}
                  />
                </TouchableOpacity>
              ),
            }}
            component={FeePayment}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
