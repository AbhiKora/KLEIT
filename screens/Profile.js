import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { getDatabase, ref, onValue, off } from "firebase/database";
import { getAuth } from "firebase/auth";
import { Button } from "react-native-paper";

export default function ProfilePage({navigation}) {
  const [mydata, setMyData] = useState(null);
  const [userRef, setUserRef] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const auth = getAuth();
        const userId = auth.currentUser.uid;
        const userEmail = auth.currentUser.email;
        setEmail(userEmail)
        const db = getDatabase();

        const userRef = ref(db, `/users/${userId}`);
        setUserRef(userRef);
        onValue(userRef, (snapshot) => {
          const data = snapshot.val();
          console.log(data.username);
          console.log(data.department);
          setMyData(data);
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();

    return () => {
      // Cleanup the listener when the component unmounts
      if (userRef) {
        off(userRef, "value"); // Remove the listener
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>User name: {mydata ? mydata.username : "Loading.."}</Text>
      <Text style={styles.text}>Department: {mydata ? mydata.department : "Loading.."}</Text>
      <Text style={styles.text}>Email: {mydata ? email : "Loading.."}</Text>
      <Button mode="contained" onPress={() => navigation.navigate("ProfileUpdate")} style={styles.button}>
        <Text style={{ color: "white" }}>Update Profile</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-start",
    },
    text:{
        fontSize:16,
        marginLeft:10,
        marginTop:10
    },
    button: {
        marginTop:50,
        marginHorizontal: 20,
        backgroundColor: "#0066ff",
      },
})