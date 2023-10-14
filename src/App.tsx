/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Navbar from "../src/components/navbar"
import Hero from "../src/components/hero"
import Rangking from "../src/components/rangking"

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Navbar />
        <Hero />
        <Rangking />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  content: {
  }
});

export default App;
