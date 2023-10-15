import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

function BoldText({ children, style }: { children: string, style?: any }) {
    return <Text style={[styles.boldText, style]}>{children}</Text>
}

const index = () => {
    return (
        <ImageBackground
            source={require('../../assets/images/hero.png')}
            style={styles.container}>
            <View>
                <View style={{ backgroundColor: "#fcba03", height: 2 }} />
                <View style={styles.labelText}>
                    <Text style={{ color: "#ffcc00", }}>Towards</Text>
                    <Text style={{ color: "#2b05b5", fontWeight: "bold" }}>world class {'\n'} university</Text>
                </View>
            </View>
            <View style={styles.textHero}>
                <BoldText style={{ fontSize: 20 }}>Gapai Mimpimu Bersama UMS</BoldText>
                <Text style={{ color: "white", lineHeight: 20 }}>
                    Dengan <BoldText>65 Program Studi </BoldText>
                    dapat menyerap minat dan bakat calon peserta didik baru.
                    UMS <BoldText>Berkomitment</BoldText> untuk mewujudkan
                    cita-cita mulia: <BoldText>Humanisasi, Liberasi </BoldText> dan
                    <BoldText> Trasendensi</BoldText>
                </Text>
                <View style={styles.button}>
                    <Text style={{ color: "#2b05b5", fontWeight: "bold", fontSize: 16 }}>
                        Informasi Pendaftaran
                    </Text>
                </View>
            </View>
        </ImageBackground>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        resizeMode: 'contain',
        height: 400,
        justifyContent: 'space-between',
    },
    boldText: {
        fontWeight: "bold",
        color: "white"
    },
    labelText: {
        flexDirection: "column",
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        marginEnd: 10,
        paddingBottom: 5,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        backgroundColor: "white",
    },
    textHero: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 10,
        padding: 20,
    },
    button: {
        backgroundColor: "#edca00",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5
    }
})