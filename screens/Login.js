import React, { useEffect, useState } from "react";
import { firebase } from '@react-native-firebase/auth';
import { Button, TextInput } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
// import firebase from '@react-native-firebase/app';

export default function Login() {
  const [Email, onChangeEmail] = React.useState("");
  const [Password, onChangePassword] = React.useState("");

  // useEffect(() => {
  //   getDatabase();
  // }, []);

  const handleLogin = async () => {
    try {
      if (firebase.apps.length === 0)
      {
        console.log("Firebase not initialised")
      }
      const isUserCreated = await firebase.auth().createUserWithEmailAndPassword(Email, Password)
      console.log(isUserCreated)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style = {styles.container}>
      <Text style = {[{fontSize:26},{alignSelf:"center"},{paddingBottom:14}]}>Please Login</Text>
      <TextInput
        label="Email"
        value={Email}
        onChangeText={(text) => onChangeEmail(text)}
        mode="outlined"
        style={styles.TextBox}
        textColor='black'
      />
      <TextInput
        label="Password"
        value={Password}
        onChangeText={(text) => onChangePassword(text)}
        mode="outlined"
        style={styles.TextBox}
        autoCapitalize="none"
        textColor='black'
        secureTextEntry={true}
      />
      <Button
        mode="contained"
        onPress={handleLogin}
        style={{ marginHorizontal: 20 }}
      >
        Login
      </Button>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  TextBox: {
    marginTop: 5,
    marginBottom: 30,
    marginHorizontal: 20,
    backgroundColor:"white",
  },
});
