import React, { useState, useEffect } from 'react';
import { View, StatusBar, Text, TouchableOpacity,StyleSheet, ScrollView, Animated, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import Colors from '../constants/colors';
import SearchBar from '../components/SearchBar'
import Card from '../components/Card';

const SearchScreen = props => {

  const screenWidth = Dimensions.get('window').width;
  const searchBarWidth = 0.7 * screenWidth;
  const [percentageSearchBoxWidth] = useState(new Animated.Value(searchBarWidth));


  const onPressFunc = () => Animated.timing(percentageSearchBoxWidth, {  useNativeDriver: false, toValue: 0.95 * screenWidth, timing: 10000 }).start();
  const onEndEditingFunc = () => Animated.timing(percentageSearchBoxWidth, {  useNativeDriver: false, toValue: searchBarWidth, timing: 10000 }).start();

  
  return (
    <View style={styles.container} >
      <SearchBar placeholderText='Search a Number' containerStyle={{ width: percentageSearchBoxWidth }} onFocus={onPressFunc} onEndEditing={onEndEditingFunc}/>
      <View style={{ height: 1.5, width: '95%', backgroundColor: Colors.tertiary, marginTop: 30, marginBottom: 10, borderRadius: 2 }}></View>
      <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center', paddingTop: 20 }}>
        <Card phoneNumber='+91 12345-67890' threatLevel='4' navigationProps={props.navigation} />
      </ScrollView>
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
});
export default SearchScreen;