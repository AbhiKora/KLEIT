import React from "react";
import { WebView } from "react-native-webview";
import { StatusBar, StyleSheet, View } from "react-native";

const PaymentScreen = () => {
  return (
    <View style={{flex:1}}>
    <StatusBar
    backgroundColor="#000"
    />
    <WebView
      source={{
        uri: "https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=796913",
      }}
      startInLoadingState={true}
      style={{flex:1}}
      />
      </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
