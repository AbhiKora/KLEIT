import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function Payment() {
  return (
    <View style={styles.container}>
        <Text>Payment Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})