import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

const UGimg = require("../assets/images/UG.png");
const PGimg = require("../assets/images/PG.png");

function UG() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("UGStack")}
      style={{ marginBottom: 20 }}
    >
      <Card>
        <Card.Cover source={UGimg} style={{ height: 250 }} />
        <Card.Content>
          <Text
            variant="titleLarge"
            style={{ color: "white", fontSize: 20, paddingTop: 8 }}
          >
            Under Graduate
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

function PG() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("PGStack")}
      style={{ marginBottom: 20 }}
    >
      <Card>
        <Card.Cover source={PGimg} style={{ height: 250 }} />
        <Card.Content>
          <Text
            variant="titleLarge"
            style={{ color: "white", fontSize: 20, paddingTop: 8 }}
          >
            Post Graduate
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

function MCA() {
  return (
    <View>
      <UG />
      <PG />
    </View>
  );
}

export default function Academics() {
  return (
    <View style={styles.container}>
      <MCA />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 10,
  },
});
