import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, TextInput } from "react-native-paper";


export default function Admissions() {
  const [Name, onChangeName] = React.useState("");
  const [Email, onChangeEmail] = React.useState("");
  const [Number, onChangeNumber] = React.useState("");
  const [Address, onChangeAddress] = React.useState("");
  return (
    <View style={styles.container}>
        <TextInput
        label="Name"
        value={Name}
        onChangeText={(text) => onChangeName(text)}
        mode="outlined"
        style={styles.TextBox}
      />
        <TextInput
        label="Email"
        value={Email}
        onChangeText={(text) => onChangeEmail(text)}
        mode="outlined"
        style={styles.TextBox}
      />
        <TextInput
        label="Number"
        value={Number}
        onChangeText={(text) => onChangeNumber(text)}
        mode="outlined"
        style={styles.TextBox}
      />
        <TextInput
        label="Address"
        value={Address}
        onChangeText={(text) => onChangeAddress(text)}
        mode="outlined"
        style={styles.TextBox}
        theme={{ colors: { primary: "#ff0000", } }}
      />
    </View>
  )
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
    color:"black"
  },
});