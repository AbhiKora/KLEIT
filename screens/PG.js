import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Card, Text } from "react-native-paper";

const MCAimg = require("../assets/images/PG/MCA.png");
const MTechimg = require("../assets/images/PG/MTech.png");

function MCA() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("MCA")}
      style={{ marginBottom: 20 }}
    >
      <Card>
        <Card.Cover source={MCAimg} style={{ height: 250 }} />
        <Card.Content>
          <Text
            variant="titleLarge"
            style={{ fontSize: 20, paddingTop: 8 }}
          >
            MCA
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}
function MTech() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("MTech")}
      style={{ marginBottom: 20 }}
    >
      <Card>
        <Card.Cover source={MTechimg} style={{ height: 250 }} />
        <Card.Content>
          <Text
            variant="titleLarge"
            style={{ fontSize: 20, paddingTop: 8 }}
          >
            MTech
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

export default function PG() {
  return (
    <View style={styles.container}>
      <MCA />
      <MTech />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        margin:10
    }
})
