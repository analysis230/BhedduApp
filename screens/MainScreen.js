import React, { useState, useEffect, useCallback } from 'react';
import { View, StatusBar, Text, TouchableOpacity, StyleSheet, ScrollView, Animated, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import Colors from '../constants/colors';
import SearchBar from '../components/SearchBar'
import CardList from '../components/CardList';
import AddButton from '../components/AddButton';

import { useDispatch } from 'react-redux';
import { fetchCards, setCards } from '../store/actions/CardActions'

import { useSelector } from 'react-redux';
import { set } from 'react-native-reanimated';
import { Viewport } from '@skele/components';
import { Ionicons, FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';
import SeparatorBar from '../components/SeparatorBar';
import { getAllLambs } from '../databases/DataStore';
//const dispatch = useDispatch();

const ViewportAwareText = Viewport.Aware(Text);

const MainScreen = props => {

  const dispatch = useDispatch();

  //console.log(props);

  const fetchedCards = useSelector(state => {
    return state.cardsScroll.cardsOnScroll;
  });

  const fetchAllCards = () => {

    console.log("fetched cards");
    getAllLambs().then(cards => {
      dispatch(setCards(cards));
    }
    )
  };


  const screenWidth = Dimensions.get('window').width;
  const searchBarWidth = 0.7 * screenWidth;
  const [percentageSearchBoxWidth] = useState(new Animated.Value(searchBarWidth));


  const onPressFunc = () => Animated.timing(percentageSearchBoxWidth, { useNativeDriver: false, toValue: 0.95 * screenWidth, timing: 10000 }).start();
  const onEndEditingFunc = () => Animated.timing(percentageSearchBoxWidth, { useNativeDriver: false, toValue: searchBarWidth, timing: 10000 }).start();


  return (
    <View style={styles.container} >
      <SearchBar navigationProps={props.navigation} placeholderText='Search a Number' containerStyle={{ width: percentageSearchBoxWidth, marginBottom: 20 }} onFocus={onPressFunc} onEndEditing={onEndEditingFunc} />
      <SeparatorBar />
      <Viewport.Tracker>
        <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center', paddingTop: 5 }} scrollEventThrottle='16'>
          <CardList cards={fetchedCards} navigationProps={props.navigation} />
          <ViewportAwareText style={{ color: Colors.textAndSymbols, height: 70 }} onViewportEnter={fetchAllCards} > End of List  </ViewportAwareText>
        </ScrollView>
      </Viewport.Tracker>
      <AddButton navigationProps={props.navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    paddingTop: 55
  },
  floatIcon: {
    position: 'absolute',
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOpacity: 0.6,
    shadowOffset: { height: 4 },
    bottom: 30,
    right: 50,
    zIndex: 3,
    elevation: 3,
    height: 60,
    width: 60,
    backgroundColor: Colors.accents,
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default MainScreen;