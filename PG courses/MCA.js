import React from "react";
import { WebView } from "react-native-webview";

export default function MCA() {
  return (
    <WebView
      source={{
        uri: "https://kleit.ac.in/master-of-computer-applications/",
      }}
    />
  );
}
