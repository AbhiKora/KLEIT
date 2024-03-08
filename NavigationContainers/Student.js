import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StudentCorner from '../screens/StudentCorner';
import StudentCenter from '../screens/StudentCenter';

const StudentStack = createNativeStackNavigator();

export default function StudentStackNavigator() {
  return (
    <StudentStack.Navigator>
          <StudentStack.Screen
            name="StudentCorner"
            options={{
              headerShown:false
            }}
            component={StudentCorner}
          />
          <StudentStack.Screen
            name="StudentCenter"
            options={{
              headerShown:false
            }}
            component={StudentCenter}
          />
          </StudentStack.Navigator>
  );}