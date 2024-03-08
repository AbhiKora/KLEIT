import React from "react";
import { commonOptions } from "../GlobalStyle";

import CustomDrawer from "../components/CustomDrawer";
import Home from "../screens/Home";
import AboutUs from "../screens/About";
import ContactUs from "../screens/ContactUs";
import PaymentScreen from "../screens/payment-Screen";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import Login from "../screens/Login";
import HeaderRight from "../components/headerRight";
import SignupScreen from "../screens/Signup";
import ProfilePage from "../screens/Profile";
import ProfileUpdatePage from "../screens/ProfileUpdate";

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
          drawerHideStatusBarOnOpen: true,
          headerRight: () => <HeaderRight />,
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
          headerRight: () => <HeaderRight />,
          drawerIcon: ({ color }) => (
            <Ionicons
              name="information-circle-outline"
              size={24}
              color={color}
            />
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
          headerRight: () => <HeaderRight />,
          drawerIcon: ({ color }) => (
            <Ionicons name="call-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          title: "Login",
          ...commonOptions,
          drawerActiveTintColor: "#fff",
          drawerActiveBackgroundColor: "#735029",
          headerRight: () => <HeaderRight />,
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
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
          headerRight: () => <HeaderRight />,
          drawerIcon: ({ color }) => (
            <Ionicons name="school-outline" size={24} color={color} />
          ),
        }}
      />

      {/* Components to use elsewhere nested in Drawer Stack */}

      <Drawer.Screen
        name="Signup"
        component={SignupScreen}
        options={{ drawerItemStyle: { display: "none" } }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfilePage}
        options={{ ...commonOptions, drawerItemStyle: { display: "none" } }}
      />
      <Drawer.Screen
        name="ProfileUpdate"
        component={ProfileUpdatePage}
        options={{ ...commonOptions, drawerItemStyle: { display: "none" } }}
      />
    </Drawer.Navigator>
  );
}
