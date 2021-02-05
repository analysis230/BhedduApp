import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import DetailsScreen from '../screens/DetailsScreen';
import SearchScreen from '../screens/MainScreen';
import AddNewScreen from '../screens/AddNewScreen';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';
import SeparatorBar from '../components/SeparatorBar';

import React from 'react';



const Navigator = createStackNavigator({
    Search: { screen: SearchScreen, navigationOptions: { headerShown: false } },
    Details: { screen: DetailsScreen, navigationOptions: { gestureEnabled: true, gestureDirection: 'horizontal' } },
    AddNew: { screen: AddNewScreen, navigationOptions: { gestureEnabled: true, gestureDirection: 'horizontal' } }
});


const drawerContents = props => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { props.navigation.navigate({ routeName: 'Details' }); }} >
                <Text style={styles.logoText}>CREEPER</Text>
            </TouchableOpacity>
            <SeparatorBar style={{ height: 3, width: '100%' }} />
        </View>);
}
const mainNavigator = createDrawerNavigator({
    searchScreen: Navigator
}, {
    drawerBackgroundColor: 'transparent',
    contentComponent: drawerContents
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.drawerBackgroundColor,
        alignItems: 'flex-start',
        paddingTop: 55,
        paddingLeft: 20
    },
    logoText: {
        color: Colors.textAndSymbols,
        fontSize: 23
    }
})

export default createAppContainer(mainNavigator);