import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from "../../assets/icons/logo.svg"
import Facebook from "../../assets/icons/fb.svg"
import Twitter from "../../assets/icons/twitter.svg"
import Youtube from "../../assets/icons/youtube.svg"
import Instagram from "../../assets/icons/instagram.svg"
import Tiktok from "../../assets/icons/tiktok.svg"

const medsosItems = [
    {
        id: 1,
        icon: <Facebook width={25} height={25} />
    },
    {
        id: 2,
        icon: <Twitter width={25} height={25} />
    },
    {
        id: 3,
        icon: <Youtube width={25} height={25} />
    },
    {
        id: 4,
        icon: <Instagram width={25} height={25} />
    },
    {
        id: 5,
        icon: <Tiktok width={25} height={25} />
    },
]

const navItems: { id: number, text: string }[] = [
    {
        id: 1,
        text: "Admisi"
    },
    {
        id: 2,
        text: "Program Studi"
    },
    {
        id: 3,
        text: "FAQ"
    },
    {
        id: 4,
        text: "Brosur PMB"
    },
]

const index = () => {
    return (
        <View style={styles.container}>
            <View style={{
                borderTopColor: "yellow",
                height: 2,
                backgroundColor: "#fcba03"
            }} />
            <View style={{ alignItems: "center", paddingVertical: 40, gap: 30, paddingHorizontal: 35 }}>
                <Logo width={200} height={100} />
                <View style={{ flexDirection: "row", gap: 20 }}>
                    {
                        navItems.map(e => (
                            <Text key={e.id} style={{ color: "white" }}>{e.text}</Text>
                        ))
                    }
                </View>
                <View style={{ flexDirection: "row", gap:35, marginTop:10 }}>
                    {
                        medsosItems.map(e => (
                            <View
                                key={e.id}
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: 100, 
                                    padding: 5
                                }}>
                                {e.icon}
                            </View>
                        ))
                    }
                </View>
                <View style={{backgroundColor: "white", height:2, width:"100%", marginTop: 10}} />
                <Text>Copyright © 2023 | PMB UMS</Text>
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2b05b5",
    },
})