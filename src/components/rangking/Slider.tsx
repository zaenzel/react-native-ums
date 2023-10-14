import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Unggul from "../../assets/icons/unggul.svg"
import Satu from "../../assets/icons/satu.svg"
import UniRank from "../../assets/icons/uniRank.svg"
import Kalbe from "../../assets/icons/kalbe.svg"
import Aun from "../../assets/icons/aun.svg"
import Ornamen from '../../assets/icons/ornamen.svg'

const sliderItems = [
    {
        id: 1,
        item: <Unggul width={200} height={200} />
    },
    {
        id: 2,
        item: <Satu width={200} height={200} />
    },
    {
        id: 3,
        item: <UniRank width={200} height={200} />
    },
    {
        id: 4,
        item: <Kalbe width={200} height={200} />
    },

    {
        id: 5,
        item: <Aun width={200} height={200} />
    }
]

const Slider = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false} // Menyembunyikan indikator gulir horizontal
                contentContainerStyle={styles.sliderContainer}
            >
                {
                    sliderItems.map((e, i) => (
                        <View key={e.id}>
                            {e.item}
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({
    container:{
        position: "relative",
    },
    sliderContainer: {
        flexDirection: 'row',
        // backgroundColor:"red",
        padding: 10,
        gap: 50,
    },
})