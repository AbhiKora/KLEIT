import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        console.log("User is logged in");
        Alert.alert("A user is already logged in.")
      }
      else {
        signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        Alert.alert("Login Successful");
        navigation.navigate("Home", {
          email: userCredential.user.email,
          uid: userCredential.user.uid,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Alert.alert(errorCode);
        console.log(errorCode);
        Alert.alert(errorMessage);
      });
      }
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
        Login with Existing Account
      </Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        mode="outlined"
        style={styles.TextBox}
        textColor="black"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        style={styles.TextBox}
        autoCapitalize="none"
        textColor="black"
        secureTextEntry={true}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        <Text style={{ color: "white" }}>Login</Text>
      </Button>
      <TouchableOpacity
        style={styles.Signup}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={[{ fontSize: 15 }, { color: "blue" }]}>
          New User? Signup
        </Text>
      </TouchableOpacity>
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
    marginBottom: 25,
    marginHorizontal: 20,
    backgroundColor: "white",
  },
  button: {
    marginHorizontal: 20,
    backgroundColor: "#0066ff",
  },
  Signup: {
    marginTop: 16,
    alignItems: "center",
  },
});
