import React from "react";
import { WebView } from "react-native-webview";

export default function FeePayment() {
  return (
    <WebView
      source={{
        uri: "https://kleit.ac.in/fee-structure/",
      }}
    />
  );
}