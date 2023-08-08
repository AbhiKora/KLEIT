import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default function({navigation}) {
    return(
    <View style={styles.container}>
    {/* <Text>Hello</Text> */}
    <View style={styles.btn}>
    <Button style={{paddingBottom:2}} title="Academics" onPress={() => navigation.navigate('Academics')}/>
    <Button style={{paddingBottom:2}} title="Admissions" onPress={() => navigation.navigate('Admissions')}/>
    </View>
    </View>
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
      position:"absolute",
      paddingBottom:'2%'
    }
  });