import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Card, Text } from "react-native-paper";

const ECEimg = require("../assets/images/UG/ECE.png");
const CSEimg = require("../assets/images/UG/CSE.png");
const EEEimg = require("../assets/images/UG/EEE.png");
const Mechimg = require("../assets/images/UG/Mech.png");
const Civilimg = require("../assets/images/UG/Civil.png");

function ECE() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ECE")}
      style={{ marginBottom: 20 }}
    >
      <Card>
        <Card.Cover source={ECEimg} style={{ height: 250 }} />
        <Card.Content>
          <Text
            variant="titleLarge"
            style={{ fontSize: 20, paddingTop: 8 }}
          >
            E & C Engineering
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

function Mech() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ME")}
      style={{ marginBottom: 20 }}
    >
      <Card>
        <Card.Cover source={Mechimg} style={{ height: 250 }} />
        <Card.Content>
          <Text
            variant="titleLarge"
            style={{ fontSize: 20, paddingTop: 8 }}
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
      onPress={() => navigation.navigate("CSE")}
      style={{ marginBottom: 20 }}
    >
      <Card>
        <Card.Cover source={CSEimg} style={{ height: 250 }} />
        <Card.Content>
          <Text
            variant="titleLarge"
            style={{ fontSize: 20, paddingTop: 8 }}
          >
            CS Engineering
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

function EEE() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CE")}
      style={{ marginBottom: 20 }}
    >
      <Card>
        <Card.Cover source={EEEimg} style={{ height: 250 }} />
        <Card.Content>
          <Text
            variant="titleLarge"
            style={{ fontSize: 20, paddingTop: 8 }}
          >
            E & E Engineering
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

function Civil() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CE")}
      style={{ marginBottom: 20 }}
    >
      <Card>
        <Card.Cover source={Civilimg} style={{ height: 250 }} />
        <Card.Content>
          <Text
            variant="titleLarge"
            style={{ fontSize: 20, paddingTop: 8 }}
          >
            Civil Engineering
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

export default function UG() {
  return (
    <ScrollView style={styles.container}>
      <ECE />
      <Mech />
      <CSE />
      <EEE />
      <Civil />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});
