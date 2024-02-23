import React from "react";
import { TouchableOpacity, Image, Linking } from "react-native";
const kle = require("../assets/images/kleit_logo.png");

const HeaderRight = () => (
  <TouchableOpacity onPress={() => Linking.openURL("https://kleit.ac.in/")}>
    <Image
      source={kle}
      style={{
        width: 50,
        height: 50,
        margin: 4,
      }}
    />
  </TouchableOpacity>
);

export default HeaderRight;
