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
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";

import Home from "./screens/Home";
import Academics from "./screens/Academics";
import Admissions from "./screens/Admissions";
import UG from "./screens/UG";
import PaymentScreen from "./screens/payment-Screen";
import PG from "./screens/PG";

import ME from "./UG courses/ME";
import CSE from "./UG courses/CSE";
import EEE from "./UG courses/EEE";
import CE from "./UG courses/CE";
import ECE from "./UG courses/ECE";

import MCA from "./PG courses/MCA";
import MTech from "./PG courses/MTech";

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
        onPress={() =>
          Linking.openURL(
            "https://www.onlinesbi.sbi/sbicollect/icollecthome.htm"
          )
        }
        options={{
          title: "KLEIT Payment",
          headerStyle: {
            backgroundColor: "#735029",
          },
          headerTintColor: "#D4D4D4",
        }}
      />
    </Drawer.Navigator>
  );
}

// function UGStack(){
//   <Stack.Navigator initialRouteName="UG">
//     <Stack.Screen
//     name="UG"
//     component={UG}
//     options={{
//       headerStyle: {
//         backgroundColor: "#735029",
//       },
//       headerTintColor: "#D4D4D4",
//     }}
//     />

//   </Stack.Navigator>
// }

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
            name="PaymentScreen"
            options={{
              title:"KLEIT Payment",
              headerStyle: {
                backgroundColor: "#735029",
              },
              headerTintColor: "#D4D4D4",
            }}
            component={PaymentScreen}
          />
          <Stack.Screen
            name="UG"
            options={{
              title: "UG Courses Offered",
              headerStyle: {
                backgroundColor: "#735029",
              },
              headerTintColor: "#D4D4D4",
            }}
            component={UG}
          />
          <Stack.Screen
            name="PG"
            options={{
              title: "PG Courses Offered",
              headerStyle: {
                backgroundColor: "#735029",
              },
              headerTintColor: "#D4D4D4",
            }}
            component={PG}
          />
          <Stack.Screen
            name="ECE"
            component={ECE}
            options={{
              headerShown:false,
              headerTintColor: "#D4D4D4",
            }}
          />
          <Stack.Screen
            name="ME"
            component={ME}
            options={{
              headerShown:false,
              headerTintColor: "#D4D4D4",
            }}
          />
          <Stack.Screen
            name="CSE"
            component={CSE}
            options={{
              headerShown:false,
              headerTintColor: "#D4D4D4",
            }}
          />
          <Stack.Screen
            name="EEE"
            component={EEE}
            options={{
              headerShown:false,
              headerTintColor: "#D4D4D4",
            }}
          />
          <Stack.Screen
            name="CE"
            component={CE}
            options={{
              headerShown:false,
              headerTintColor: "#D4D4D4",
            }}
          />
          <Stack.Screen
            name="MCA"
            component={MCA}
            options={{
              headerShown:false,
              headerTintColor: "#D4D4D4",
            }}
          />
          <Stack.Screen
            name="MTech"
            component={MTech}
            options={{
              headerShown:false,
              headerTintColor: "#D4D4D4",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
