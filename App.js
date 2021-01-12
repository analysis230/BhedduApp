import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Colors from './constants/colors';
import SearchScreen from './screens/SearchScreen';
import DetailsScreen from './screens/DetailsScreen';
import * as Font from 'expo-font';
import AppLoading  from 'expo-app-loading';
import Svg, { G, Path, Rect } from 'react-native-svg';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Navigator from './navigation/Navigator';

const fetchFonts = () => {
  return Font.loadAsync({
    'primary': require('./assets/fonts/MYRIADPRO-REGULAR.ttf'),
    'primary-bold': require('./assets/fonts/MYRIADPRO-BOLD.ttf')
  }
  );
};

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)}  onError={console.warn} />
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
