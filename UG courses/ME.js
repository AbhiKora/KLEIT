import React from 'react'
import { WebView } from 'react-native-webview';

export default function ME() {
  return (
    <WebView source={{ uri: 'https://kleit.ac.in/mechanical-engineering/' }} />
  )
}
