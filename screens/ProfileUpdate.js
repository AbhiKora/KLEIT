import React, { useState, useEffect } from "react";
import { Button, TextInput, Text, View, Alert } from "react-native";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getDatabase, ref, onValue, update } from "firebase/database";

export default function ProfileUpdatePage({ navigation, route }) {
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState("");
  const [username, setUsername] = useState("");
  const [department, setDepartment] = useState("");
  // Add more state variables for additional information

  const db = getDatabase(); // Initialize Firebase Database instance

  useEffect(() => {
    const auth = getAuth();
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
        setUid(user.uid);
        fetchProfileData(); // Fetch profile data upon successful login
      }
    });

    return unsubscribeAuth; // Clean up listeners on component unmount
  }, []);

  const fetchProfileData = () => {
    const userRef = ref(db, `users/${uid}`);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setUsername(data.username || ""); // Set username or default to empty string
        setDepartment(data.department || ""); // Set department or default to empty string
        // Set other information based on the database structure
      }
    });
  };

  const handleSave = async () => {
    // Update user profile using Firebase Authentication
    await updateProfile(getAuth().currentUser, {
      displayName: username, // Update display name with username
    });

    // Update profile information in Firebase Realtime Database
    const userRef = ref(db, `users/${uid}`);
    update(userRef, {
      username,
      department,
      // Add other information to update
    });

    console.log("Profile information saved successfully!");
    Alert.alert("Profile information saved successfully!");
    navigation.navigate("Profile")
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Email: {email}</Text>
      {/* <Text>UID: {uid}</Text>s */}
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Enter username"
        style={{ marginVertical: 10 }}
      />
      <TextInput
        value={department}
        onChangeText={setDepartment}
        placeholder="Enter department"
        style={{ marginVertical: 10 }}
      />
      {/* Add more input fields for additional information */}
      <Button title="Save Profile" onPress={handleSave} />
    </View>
  );
}
