import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function Academics() {
  return (
    <View style={styles.container}>
        <Text>Second Page</Text>
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