import React from "react";
import { TouchableOpacity, Image, Linking } from "react-native";
import { Menu, Divider } from "react-native-paper";
const kle = require("../assets/images/kleit_logo.png");

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const handleLogout = () => {
  const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // user is logged in
    signOut(auth)
    .then(() => {
      console.log("User signed out");           // Code might have issues here
    })
    .catch((error) => {
      console.error("Error signing out: ", error);
    });
  } else {
    // No user is signed in.
    console.log("No user is logged in");
  }
});
}

const HeaderRight = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
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
        <Menu.Item onPress={() => {}} title="Profile" />
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
