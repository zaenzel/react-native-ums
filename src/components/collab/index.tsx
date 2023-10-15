import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type ImageType = {
    id: string
    img: any
    style: object
}

const imagePartners: ImageType[] = [
    {
        id: "1",
        img: require("../../assets/images/tomyong.png"),
        style: {
            width: 150,
            height: 50
        }
    },
    {
        id: "2",
        img: require("../../assets/images/kyungdongy.png"),
        style: {
            width: 150,
            height: 50
        }
    },
    {
        id: "3",
        img: require("../../assets/images/ndhu.png"),
        style: {
            width: 150,
            height: 37
        }
    },
    {
        id: "4",
        img: require("../../assets/images/uthm.png"),
        style: {
            width: 150,
            height: 40
        }
    },
]

const index = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kolaborasi Universitas</Text>
            <Text style={styles.subTitle}>
                Berkerjasama dengan Universitas Luar Negeri {'\n'} dalam proses pembangunan
            </Text>
            <View style={styles.gridItem}>
                {
                    imagePartners.map((item, i) => (
                        <View key={item.id}>
                            <Image source={item.img} style={item.style} />
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingVertical: 50,
        gap: 20
    },
    title: {
        color: "#2b05b5",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center"
    },
    subTitle: {
        color: '#2b05b5',
        textAlign: "center"
    },
    gridItem: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 40
    },
})