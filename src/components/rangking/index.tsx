import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from './Slider'
import Ornamen from '../../assets/icons/ornamen.svg'

const index = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={{ fontSize: 18, color: "#2b05b5", fontWeight: "bold" }}>UMS Rangking</Text>
                <Text style={{ color: "#2b05b5", textAlign: 'center', fontWeight: "500" }}>
                    Universitas Swasta Terbaik di Jawa Tengah, {'\n'}
                    Indonesia (QS Rangking 2022)
                </Text>
                <Slider />
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        height: 500,
    },
    wrapper: {
        paddingVertical: 50,
        alignItems: "center",
        gap: 20,
    },
})