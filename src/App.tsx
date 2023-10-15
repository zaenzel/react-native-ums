/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Navbar from "../src/components/navbar"
import Hero from "../src/components/hero"
import Rangking from "../src/components/rangking"
import Title from "../src/components/title"
import Collab from "../src/components/collab/index"
import Footer from "../src/components/footer/index"

function App(): JSX.Element {
  return (
    <View>
      <ScrollView>
        <Navbar />
        <Hero />
        <Rangking />
        <Title />
        <Collab />
        <Footer />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({});

export default App;
