import { createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
import DetailsScreen from '../screens/DetailsScreen';
import SearchScreen from '../screens/SearchScreen';

const Navigator = createStackNavigator({
    Search: {screen: SearchScreen, navigationOptions: {headerShown: false}} ,
    Details: DetailsScreen
});

export default createAppContainer(Navigator);