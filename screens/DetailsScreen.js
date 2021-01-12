import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, StyleSheet, ScrollView, Animated, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import Colors from '../constants/colors';
import SearchBar from '../components/SearchBar'
import Card from '../components/Card';

const DetailsScreen = props => {

    const screenWidth = Dimensions.get('window').width;
    const searchBarWidth = 0.7 * screenWidth;
    const [percentageSearchBoxWidth] = useState(new Animated.Value(searchBarWidth));
  
  
    const onPressFunc = () => Animated.timing(percentageSearchBoxWidth, { toValue: screenWidth, timing: 10000 }).start();
    const onEndEditingFunc = () => Animated.timing(percentageSearchBoxWidth, { toValue: searchBarWidth, timing: 10000 }).start();
  
    return (
      <View style={styles.container} >
        <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center', paddingTop: 20 }}>
          <Card phoneNumber='+91 983494-0' threatLevel='4' />
        </ScrollView>
      </View>
    );
  }
  
  DetailsScreen.navigationOptions = { 
    headerTitle: 'Details', 
    headerStyle: { backgroundColor: Colors.secondary},
    headerTintColor: Colors.textAndSymbols
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.primary,
      alignItems: 'center',
      paddingTop: 55
    },
  });

 
  export default DetailsScreen;