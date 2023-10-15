import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardTitle from './CardTitle'

export type CardType = {
  id: number
  name: string
  isOpen: boolean
}

const cardItem: CardType[] = [
  {
    id: 1,
    name: "Vokasi",
    isOpen: true
  },
  {
    id: 2,
    name: "Sarjana",
    isOpen: true
  },
  {
    id: 3,
    name: "Magister",
    isOpen: false
  },
]

const index = () => {
  return (
      <View style={styles.container}>
        <View style={styles.wrapperText}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Pendaftaran</Text>
          <Text style={{ color: "#edca00", lineHeight: 20 }}>Membuka berbagai jenjang pendidikan {`\n`} memberikan kontribusi yang maksimal</Text>
        </View>
        <View style={{ gap: 50 }}>
          {
            cardItem.map((e) => (
              <CardTitle key={e.id} {...e} />
            ))
          }
        </View>
      </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2b05b5",
    paddingVertical: 50,
    gap: 30
  },
  wrapperText: {
    alignItems: "center",
    gap: 20
  }
})