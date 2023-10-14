import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Hamburger from './Hamburger'
import Logo from "../../assets/icons/logo.svg"
import Search from "../../assets/icons/search.svg"
import Flag from './Flag'

const index = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapNav}>
                <Hamburger />
                <Logo width={100} height={50} />
            </View>
            <View style={styles.wrapNav}>
                <Search width={30} height={30} />
                <Flag />
                <Text style={styles.login}>Login</Text>
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#2b05b5",
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    wrapNav: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16
    },
    login:{
        color: "white",
        fontWeight: "bold",
        marginStart: 2
    }
})