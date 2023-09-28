import React from "react";
import { Image, Linking, TouchableOpacity } from "react-native";
import { commonOptions } from "../GlobalStyle";

import CustomDrawer from "../CustomDrawer";
import Home from "../screens/Home";
import AboutUs from "../screens/About";
import ContactUs from "../screens/ContactUs";
import PaymentScreen from "../screens/payment-Screen";

const kle = require("../assets/images/kleit_logo.png");

import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

export default function DrawerStackNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{ drawerLabelStyle: { marginLeft: -25 } }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "",
          headerTransparent: true,
          headerTintColor: "#D4D4D4",
          drawerActiveTintColor: "#fff",
          drawerActiveBackgroundColor: "#735029",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => Linking.openURL("https://kleit.ac.in/")}
            >
              <Image
                source={kle}
                style={{ width: 50, height: 50, marginRight: 12, marginTop: 8 }}
              />
            </TouchableOpacity>
          ),
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          title: "About",
          ...commonOptions,
          drawerActiveTintColor: "#fff",
          drawerActiveBackgroundColor: "#735029",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => Linking.openURL("https://kleit.ac.in/")}
            >
              <Image
                source={kle}
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 4,
                  marginBottom: 4,
                }}
              />
            </TouchableOpacity>
          ),
          drawerIcon: ({ color }) => (
            <Ionicons name="information-circle-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          title: "Contact Us",
          ...commonOptions,
          drawerActiveTintColor: "#fff",
          drawerActiveBackgroundColor: "#735029",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => Linking.openURL("https://kleit.ac.in/")}
            >
              <Image
                source={kle}
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 4,
                  marginBottom: 4,
                }}
              />
            </TouchableOpacity>
          ),
          drawerIcon: ({ color }) => (
            <Ionicons name="call-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Payment Screen"
        component={PaymentScreen}
        options={{
          title: "KLEIT Payment",
          ...commonOptions,
          drawerActiveTintColor: "#fff",
          drawerActiveBackgroundColor: "#735029",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => Linking.openURL("https://kleit.ac.in/")}
            >
              <Image
                source={kle}
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 4,
                  marginBottom: 4,
                }}
              />
            </TouchableOpacity>
          ),
          drawerIcon: ({ color }) => (
            <Ionicons name="school-outline" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
