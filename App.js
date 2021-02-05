import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Colors from './constants/colors';
import SearchScreen from './screens/MainScreen';
import DetailsScreen from './screens/DetailsScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Svg, { G, Path, Rect } from 'react-native-svg';
import { createDrawerNavigator } from '@react-navigation/drawer';


import { createStore, combineReducers } from 'redux';
import CardsOnScrollReducer from './store/reducers/CardsOnScrollReducer'
import { Provider } from 'react-redux';


import Navigator from './navigation/Navigator';

const rootReducer = combineReducers({ cardsScroll: CardsOnScrollReducer });

const store = createStore(rootReducer);

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
      <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} onError={console.warn} />
    );
  }

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <Navigator options={configs.navigatorOptions.gestureDirection} />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const configs =
{
  navigatorOptions:
  {
    gestureDirection: 'vertical'
  }
}
