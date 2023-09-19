import React from "react";
import { WebView } from "react-native-webview";

export default function ECE() {
  return (
    <WebView
      source={{
        uri: "https://kleit.ac.in/electronics-communication-engineering/",
      }}
    />
  );
}
