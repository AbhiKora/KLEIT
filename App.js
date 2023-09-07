import "react-native-gesture-handler";
import {
  Button,
  IconButton,
  Menu,
  Provider as PaperProvider,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, Linking, TouchableOpacity } from "react-native";
import { useFonts, Roboto_700Bold } from '@expo-google-fonts/roboto';

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000);

import Home from "./screens/Home";
import Academics from "./screens/Academics";
import Admissions from "./screens/Admissions";
import UG from "./screens/UG";

const kle = require("./assets/images/kleit_logo.png");

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Draw() {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle:"",
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
          // headerRight:() =>(
          //   <IconButton icon={Menu} size={50} iconColor="white" style={{margin:30}}/>
          // )
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeDrawer"
            options={{
              headerShown: false,
            }}
            component={Draw}
          />
          <Stack.Screen
            name="Academics"
            options={{
              headerStyle: {
                backgroundColor: "#735029",
              },
              headerTintColor: "#D4D4D4",
            }}
            component={Academics}
          />
          <Stack.Screen
            name="Admissions"
            options={{
              headerStyle: {
                backgroundColor: "#735029",
              },
              headerTintColor: "#D4D4D4",
            }}
            component={Admissions}
          />
          <Stack.Screen
            name="UG"
            options={{
              title:"UG Courses Offered",
              headerStyle: {
                backgroundColor: "#735029",
              },
              headerTintColor: "#D4D4D4",
            }}
            component={UG}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
