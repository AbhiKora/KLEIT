import React from 'react'
import { Image, Linking, TouchableOpacity } from "react-native";
import { commonOptions } from '../GlobalStyle';

import Home from "../screens/Home";
import PaymentScreen from "../screens/payment-Screen";

const kle = require("../assets/images/kleit_logo.png");

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function DrawerStackNavigator() {
  
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            statusBarColor: "#000000",
            headerTitle: "",
            headerTransparent: true,
            headerTintColor: "#D4D4D4",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => Linking.openURL("https://kleit.ac.in/")}
              >
                <Image
                  source={kle}
                  style={{ width: 50, height: 50, marginRight: 8, marginTop: 4 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Drawer.Screen
          name="Payment Screen"
          component={PaymentScreen}
          options={{
            title: "KLEIT Payment",
            ...commonOptions
          }}
          />
      </Drawer.Navigator>
    );
  }