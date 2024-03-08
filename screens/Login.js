import React, { useState, useEffect } from "react";
import { Button, TextInput } from "react-native-paper";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { saveAuthData } from '../services/authStorage';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); // Update login status based on user object
    });

    return () => unsubscribe(); // Clean up listener on component unmount
  }, []);

  const handleLogin = async () => {
    if (!isLoggedIn) {
      const auth = getAuth();

      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("User logged in successfully!");
        Alert.alert("Login Successful");
        await saveAuthData(userCredential.email, userCredential.uid);
      } catch (error) {
        console.error("Login error:", error);
        Alert.alert("Login Error:", error.message);
      }
    } else {
      Alert.alert(
        "Already Logged In",
        "You are already logged in with another account."
      );
    }
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <>
        <Text style={styles.alreadyLoggedInText}>
          You are currently logged in.
        </Text>
        <Button mode="contained" onPress={() => navigation.navigate("Home")} style={styles.button}>
            <Text style={{ color: "white" }}>Go to home</Text>
          </Button>
        </>
      ) : (
        <>
          <Text style={[styles.title]}>Login with Existing Account</Text>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            mode="outlined"
            style={styles.textBox}
            textColor="black"
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            mode="outlined"
            style={styles.textBox}
            autoCapitalize="none"
            textColor="black"
            secureTextEntry={true}
          />
          <Button mode="contained" onPress={handleLogin} style={styles.button}>
            <Text style={{ color: "white" }}>Login</Text>
          </Button>
          <TouchableOpacity
            style={styles.signup}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.signupText}>New User? Signup</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  title: {
    fontSize: 26,
    marginBottom: 14,
    alignSelf: "center"
  },
  textBox: {
    marginTop: 5,
    marginBottom: 25,
    marginHorizontal: 20,
    backgroundColor: "white",
  },
  button: {
    marginHorizontal: 20,
    backgroundColor: "#0066ff",
  },
  signup: {
    marginTop: 16,
  },
  signupText: {
    fontSize: 15,
    color: "blue",
    alignSelf: "center"
  },
  alreadyLoggedInText: {
    fontSize: 20,
    marginBottom: 20,
    alignSelf: "center"
  },
});
