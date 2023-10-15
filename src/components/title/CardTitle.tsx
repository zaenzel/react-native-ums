import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Hat from "../../assets/icons/hat.svg"
import Label from "../../assets/icons/label.svg"
import { CardType } from '.'
import Arrow from "../../assets/icons/rightArrow.svg"

const CardTitle = ({
    id,
    name,
    isOpen
}: CardType) => {
    return (
        <View style={{ paddingHorizontal: 20 }}>
            <View style={styles.container}>
                <View style={styles.head}>
                    <View style={{ backgroundColor: "#ebebeb", padding: 5, borderRadius: 20 }}>
                        <Hat width={25} height={25} />
                    </View>
                    <Text style={styles.title}>{name}</Text>
                </View>
                {
                    isOpen &&
                    <View style={styles.label}>
                        <Label width={100} height={32} />
                    </View>
                }
                <Text style={{ color: "black", fontSize: 16 }}>
                    Temukan seputar informasi PMB program vokasi di UMS
                </Text>
                <View style={styles.btn}>
                    <Text style={{ color: "white" }}>Selengkapnya</Text>
                    <Arrow width={20} height={16} style={{marginTop:3}} />
                </View>
            </View>
        </View>
    )
}

export default CardTitle

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 20,
        gap: 20,
        borderRadius: 5,
        position: "relative"
    },
    head: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    label: {
        position: "absolute",
        top: 10,
        right: -25,
        borderRadius: 3,
    },
    title: {
        color: "black",
        fontWeight: "bold",
        fontSize: 24
    },
    btn: {
        backgroundColor: "#2b05b5",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    }
})