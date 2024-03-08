import React from 'react'
import { Text, TouchableOpacity, View, ImageBackground, StyleSheet } from 'react-native'

const bgimg = require("../assets/images/Student/bgimg.jpeg")
const btn1 = require("../assets/images/Student/colors.jpeg")

export default function StudentCorner({navigation}) {
  return (
    <ImageBackground style={styles.container} source={bgimg} >
    <TouchableOpacity
    onPress={() => navigation.navigate("StudentCenter")}
    style={[styles.btn,{textShadowColor: "black",
    textShadowOffset: { width: 1.5, height: 1.5 },
    textShadowRadius: 5,}]}
  >
    <ImageBackground
      source={btn1}
      style={{ opacity: 1, height: 50 }}
      resizeMode="cover"
    >
      <View style={{ alignItems: "center" }}>
        <Text style={{ color: "white", fontSize: 20, padding: 10 }}>
          Student Center
        </Text>
      </View>
    </ImageBackground>
  </TouchableOpacity>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    },
    btn: {
        borderWidth: 2.3,
        borderColor: "white",
        marginHorizontal: 16,
        marginBottom: 25,
        borderRadius: 6,
      },
      btntxt: {
        color: "white",
        fontSize: 20,
        padding: 10,
      },
})