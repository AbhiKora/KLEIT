import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { Alert, StyleSheet, Text, View } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignupScreen({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        Alert.alert("User created. Login with account.");
        navigation.navigate("Login")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorCode);
        // Alert.alert(errorMessage)
      });
  };

  return (
    <View style={styles.container}>
      <Text
        style={[
          { fontSize: 26 },
          { alignSelf: "center" },
          { paddingBottom: 14 },
        ]}
      >
        Create Account
      </Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        mode="outlined"
        style={styles.TextBox}
        textColor="black"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        style={styles.TextBox}
        autoCapitalize="none"
        textColor="black"
        secureTextEntry={true}
      />
      <Button
        mode="contained"
        onPress={handleSignup}
        style={{ marginHorizontal: 20 }}
      >
        Sign Up
      </Button>
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
    backgroundColor: "white",
  },
});
