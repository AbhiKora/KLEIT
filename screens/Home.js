import React from "react";
import { View, StyleSheet, Text, Button, ImageBackground } from "react-native";

const bgimg = require("D:/Project/React_Native/KLEIT/assets/kle.jpg")
export default function({navigation}) {
    return(
    <ImageBackground source={bgimg} style={styles.container} resizeMode="cover">
    {/* <Text>Hello</Text> */}
    {/* <Text style={{fontFamily:'Lightning Script'}}>Hello</Text> */}
    <View style={styles.btn}>
      <Button  title="Payment" onPress={() => navigation.navigate('Payment')}/>
    </View>
    <View style={styles.btn}>
      <Button  title="Academics" onPress={() => navigation.navigate('Academics')}/>
    </View>
    <View style={[styles.btn, {paddingBottom:'50%'}]}>
      <Button title="Admissions" onPress={() => navigation.navigate('Admissions')}/>
    </View>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end',
      
    },
    btn: {
      paddingBottom:10,
      width:100
    }
  });