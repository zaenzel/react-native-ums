import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dropdown from "../../assets/icons/dropdown.svg"

const Flag = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={{width: 30, height: 10 , backgroundColor: "red"}} />
        <View style={{width: 30, height: 10 , backgroundColor: "white"}} />
      </View>
      <Dropdown width={16} height={16}/>
    </View>
  )
}

export default Flag

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        alignItems: "center",
        gap: 2
    }
})