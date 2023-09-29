import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const bgimg = require("../assets/images/KLELOGO.png");
const btn = require("../assets/images/btnbg.png");

export default function Admissions() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <Image
    source={bgimg}
    style={{height: 350, width: 350, alignSelf:"center", marginBottom:50}}
    />
      <TouchableOpacity
        onPress={() => navigation.navigate("FeePayment")}
        style={styles.btn}
        >
        <ImageBackground
          source={btn}
          style={{ opacity: 1, height: 50 }}
          resizeMode="cover"
          >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: "black",
                fontSize: 20,
                padding: 10,
                textShadowColor: "gray",
                textShadowOffset: { width: 1.5, height: 1.5 },
                textShadowRadius: 5,
              }}
              >
              Fee Structure
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <View style={{ paddingBottom: "38%" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("PaymentScreen")}
          style={styles.btn}
          >
          <ImageBackground
            source={btn}
            style={{ opacity: 1, height: 50 }}
            resizeMode="cover"
            >
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  padding: 10,
                  textShadowColor: "gray",
                  textShadowOffset: { width: 1.5, height: 1.5 },
                  textShadowRadius: 5,
                }}
                >
                Online Payment
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
                </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor:""
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
    borderColor: "black",
    marginHorizontal: 16,
    marginBottom: 25,
    borderRadius: 6,
  },
});
