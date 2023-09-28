import React from "react";
import { WebView } from "react-native-webview";

export default function MCA() {
  return (
    <WebView
      source={{
        uri: "https://kleit.ac.in/master-of-computer-applications/",
      }}
      startInLoadingState={true}
      injectedJavaScript={`document.getElementsByClassName('toolbar-container')[0].style.display = 'none';
      document.getElementsByClassName('thim-nav-wrapper container')[0].style.display = 'none';
      document.getElementsByClassName(' site-footer')[0].style.display = 'none';
      document.getElementsByTagName("iframe")[0].contentDocument.controlsList="nodownload";`}
    />
  );
}
