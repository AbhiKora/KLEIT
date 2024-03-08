import React from "react";
import { TouchableOpacity, Image, Linking, Alert } from "react-native";
import { Menu, Divider } from "react-native-paper";
const kle = require("../assets/images/kleit_logo.png");

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const handleLogout = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    // User is logged in
    signOut(auth)
      .then(() => {
        Alert.alert("User signed out");
        console.log("User signed out");
      })
      .catch((error) => {
        Alert.alert("Error signing out:", error);
        console.error("Error signing out: ", error);
      });
  } else {
    // No user is logged in
    Alert.alert("No user is logged in");
    console.log("No user is logged in");
  }
};


const HeaderRight = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const navigation = useNavigation()
  return (
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <TouchableOpacity onPress={openMenu}>
            <Image
              source={kle}
              style={{
                width: 50,
                height: 50,
                margin: 6,
              }}
            />
          </TouchableOpacity>
        }
      >
        <Menu.Item onPress={() => navigation.navigate("Profile")} title="Profile" />
        <Divider />
        <Menu.Item
          onPress={() => Linking.openURL("https://kleit.ac.in/")}
          title="Go to website"
        />
        <Divider />
        <Menu.Item onPress={handleLogout} title="Logout" />
      </Menu>
  );
};

export default HeaderRight;

//() => Linking.openURL("https://kleit.ac.in/")
