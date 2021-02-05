import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, StyleSheet, ScrollView, Animated, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import Colors from '../constants/colors';
import SearchBar from '../components/SearchBar'
import Card from '../components/Card';

const DetailsScreen = props => {

  const lambDetails = props.navigation.getParam('lambDetails')

  return (
    <View style={styles.container} >

      <Text style={{ ...styles.numberText, fontSize: 40, paddingBottom: 30 }}>{lambDetails.id}</Text>
      <Text style={styles.numberText}>{'Dame ID: ' + lambDetails.dameId}</Text>
      <Text style={styles.numberText}>{'Sire ID: ' + lambDetails.sireId}</Text>
      <Text style={styles.numberText}>{'Date of Birth: ' + lambDetails.dateOfLambing}</Text>
      <Text style={styles.numberText}>{'Date of Mating: ' + lambDetails.dateOfMating}</Text>
      <Text style={styles.numberText}>{'Birth Weight: ' + (lambDetails.birthWeight / 1000).toFixed(2) + 'kg'}</Text>
      <Text style={styles.numberText}>{'Sex: ' + lambDetails.sex}</Text>
      <Text style={styles.numberText}>{'Remarks: ' + lambDetails.remarks}</Text>
    </View>
  );
}

DetailsScreen.navigationOptions = {
  headerTitle: 'Details',
  headerStyle: { backgroundColor: Colors.secondary },
  headerTintColor: Colors.textAndSymbols
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: Colors.primary,
    paddingTop: 55,
    paddingLeft: 30
  },
  numberText: {
    color: Colors.textAndSymbols,
    fontSize: 23,
    marginBottom: 10
  }
});


export default DetailsScreen;