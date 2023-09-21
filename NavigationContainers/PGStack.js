import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PG from "../screens/PG";

import MCA from "../PG courses/MCA";
import MTech from "../PG courses/MTech";

const PGStack = createNativeStackNavigator();

const commonOptions = {
  headerStyle: {
    backgroundColor: "#735029",
  },
  headerTintColor: "#D4D4D4",
  statusBarColor: "black",
};

export default function PGStackNavigator() {
  return (
    <PGStack.Navigator>
          <PGStack.Screen
            name="PG"
            options={{
              headerShown:false
            }}
            component={PG}
          />
          
          <PGStack.Screen
            name="MCA"
            component={MCA}
            options={{
              headerShown:false,
            }}
          />
          <PGStack.Screen
            name="MTech"
            component={MTech}
            options={{
              headerShown:false,
            }}
          />
          </PGStack.Navigator>
  );}