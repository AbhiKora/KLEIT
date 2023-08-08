import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Academics from "./screens/Academics";
import Admissions from "./screens/Admissions";

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
            headerTintColor: "#D4D4D4"
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
