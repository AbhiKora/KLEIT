import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Linking } from 'react-native';

const PaymentScreen = (props) => {
    const { url, children, style = {}  } = props;
    
    const onPress = () => Linking.canOpenURL(url).then(() => {
        Linking.openURL(url);
    });

    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{children}</Text>
        </TouchableOpacity>
    );
};

export default PaymentScreen;