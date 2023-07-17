import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default function({navigation}) {
    return(
    <View style={styles.container}>
    <Text>Hello</Text>
    <Button title="Next Screen" onPress={() => navigation.navigate('Page2')}/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });