import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UG from "../screens/UG";

import ME from "../UG courses/ME";
import CSE from "../UG courses/CSE";
import EEE from "../UG courses/EEE";
import CE from "../UG courses/CE";
import ECE from "../UG courses/ECE";

const UGStack = createNativeStackNavigator();

const commonOptions = {
  headerStyle: {
    backgroundColor: "#735029",
  },
  headerTintColor: "#D4D4D4",
  statusBarColor: "black",
};

export default function UGStackNavigator() {
  return (
    <UGStack.Navigator initialRouteName="UG">
      <UGStack.Screen
        name="UG"
        component={UG}
        options={{
          headerShown: false,
        }}
      />
      <UGStack.Screen
        name="ECE"
        component={ECE}
        options={{
          headerShown: false,
        }}
      />
      <UGStack.Screen
        name="ME"
        component={ME}
        options={{
          headerShown: false,
        }}
      />
      <UGStack.Screen
        name="CSE"
        component={CSE}
        options={{
          headerShown: false,
        }}
      />
      <UGStack.Screen
        name="EEE"
        component={EEE}
        options={{
          headerShown: false,
        }}
      />
      <UGStack.Screen
        name="CE"
        component={CE}
        options={{
          headerShown: false,
        }}
      />
    </UGStack.Navigator>
  );
}
