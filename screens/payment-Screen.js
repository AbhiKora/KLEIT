import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View } from 'react-native';

const PaymentScreen = () => {
    return (
      <WebView source={{ uri: 'https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=796913' }} />
    );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});