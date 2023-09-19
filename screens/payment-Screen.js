import React from 'react';
import { WebView } from 'react-native-webview';

const PaymentScreen = () => {
    return (
      <WebView source={{ uri: 'https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=796913' }} />
    );
};

export default PaymentScreen;
