import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Hamburger = () => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.line} />
                <View style={styles.line} />
                <View style={styles.line} />
            </View>
        </TouchableOpacity>
    )
}

export default Hamburger

const styles = StyleSheet.create({
    container: {
        maxWidth: 24,
        gap: 5,
        backgroundColor: "black",
    },
    line: {
        width: 20,
        height: 2,
        backgroundColor: "white",
        borderRadius: 1
    }
})