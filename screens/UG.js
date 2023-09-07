import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Card, Text } from "react-native-paper";

const CSEimg = require("../assets/images/UG/CSE.png");
const IEEEimg = require("../assets/images/UG/IEEE.png");
const Mechimg = require("../assets/images/UG/Mech.png");

function Mech() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
    //   onPress={() => navigation.navigate("")}
      style={{ marginBottom: 20 }}
    >
      <Card>
        <Card.Cover source={Mechimg} style={{ height: 250 }} />
        <Card.Content>
          <Text
            variant="titleLarge"
            style={{ color: "white", fontSize: 20, paddingTop: 8 }}
          >
            Mechanical Engineering
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

function CSE() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
    //   onPress={() => navigation.navigate("")}
      style={{ marginBottom: 20 }}
    >
      <Card>
        <Card.Cover source={CSEimg} style={{ height: 250 }} />
        <Card.Content>
          <Text
            variant="titleLarge"
            style={{ color: "white", fontSize: 20, paddingTop: 8 }}
          >
            CS & Engineering
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

function IEEE() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
    //   onPress={() => navigation.navigate("")}
      style={{ marginBottom: 20 }}
    >
      <Card>
        <Card.Cover source={IEEEimg} style={{ height: 250 }} />
        <Card.Content>
          <Text
            variant="titleLarge"
            style={{ color: "white", fontSize: 20, paddingTop: 8 }}
          >
            E & E Engineering
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

export default function UG() {
  return (
    <ScrollView style={styles.container}>
      <Mech/>
      <CSE />
      <IEEE />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:10
    }
})
