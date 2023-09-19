import { Roboto_700Bold } from "@expo-google-fonts/roboto";
import React from "react";
import {
  View,
  StyleSheet,
  Linking,
  Button,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

const bgimg = require("../assets/images/bgimg.png");
const btn1 = require("../assets/images/btn2.png");
const btn2 = require("../assets/images/btn1.png");
const btn3 = require("../assets/images/btn.png");

export default function ({ navigation }) {
  return (
    <ImageBackground source={bgimg} style={styles.container} resizeMode="cover">
      <View style={styles.textbox}>
        <Text style={styles.text}>"Empower</Text>
        <Text style={styles.text}>Your Future at</Text>
        <Text style={styles.text}>KLE Where</Text>
        <Text style={styles.text}>Dreams Take</Text>
        <Text style={styles.text}>Flight!"</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Academics")}
        style={styles.btn}
      >
        <ImageBackground
          source={btn1}
          style={{ opacity: 1, height: 50 }}
          resizeMode="cover"
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                padding: 10,
                textShadowColor: "black",
                textShadowOffset: { width: 1.5, height: 1.5 },
                textShadowRadius: 5,
              }}
            >
              Academics
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Admissions")}
        style={styles.btn}
      >
        <ImageBackground
          source={btn2}
          style={{ opacity: 1, height: 50 }}
          resizeMode="cover"
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                padding: 10,
                textShadowColor: "black",
                textShadowOffset: { width: 1.5, height: 1.5 },
                textShadowRadius: 5,
              }}
            >
              Admissions
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <View style={{ paddingBottom: "34%" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("PaymentScreen")}
          style={styles.btn}
        >
          <ImageBackground
            source={btn3}
            style={{ opacity: 1, height: 50 }}
            resizeMode="cover"
          >
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "white", fontSize: 20, padding: 10 }}>
                Payment
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "flex-end",
  },
  textbox: {
    marginLeft: 16,
    paddingBottom: 200,
  },
  text: {
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    fontSize: 30,
    fontFamily: "Roboto_700Bold",
  },
  btn: {
    borderWidth: 2.3,
    borderColor: "white",
    marginHorizontal: 16,
    marginBottom: 25,
    borderRadius: 6,
  },
});
