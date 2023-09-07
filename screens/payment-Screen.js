import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Linking, Button } from 'react-native';

const PaymentScreen = (props) => {
    const { url, children, style = {}  } = props;
    
    const onPress = () => Linking.canOpenURL(url).then(() => {
        Linking.openURL("https://www.onlinesbi.sbi/sbicollect/icollecthome.htm");
    });

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text>{children}</Text>
            <Button
            style={{width:200}}
          title="Go to website"
          onPress={() =>
            Linking.openURL(
              "https://www.onlinesbi.sbi/sbicollect/icollecthome.htm"
            )
          }
        />
        </TouchableOpacity>
    );
};

export default PaymentScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})