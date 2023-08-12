import React from "react";
import { View, StyleSheet, Text, Button, ImageBackground } from "react-native";

const bgimg = require("../assets/images/kle.png")
export default function({navigation}) {
    return(
      <View style={styles.container}>
            <View style={styles.btn}>
      <Button  title="Payment" onPress={() => navigation.navigate('Payment')}/>
    </View>
    <View style={styles.btn}>
      <Button  title="Academics" onPress={() => navigation.navigate('Academics')}/>
    </View>
    <View style={[styles.btn, {paddingBottom:'50%'}]}>
      <Button title="Admissions" onPress={() => navigation.navigate('Admissions')}/>
    </View>
      </View>
    // <ImageBackground source={bgimg} style={styles.container} resizeMode="cover">


    // </ImageBackground>
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