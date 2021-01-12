import React from 'react';
import { View, Text,TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import Colors from '../constants/colors';

const Card = props => {
    return (
        <TouchableOpacity onPress={ () => { props.navigationProps.navigate( {routeName: 'Details' }); }}  style={ {width: '90%', alignItems: 'center'} }>
      
        <View style={styles.container} >
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 80, height: 80, backgroundColor: 'gray', borderRadius: 10 }}>
                </View>
                <View style={ {paddingLeft: 15} }>
                    <Text style={ styles.numberText }>{props.phoneNumber}</Text>
                    <Text style={ styles.threatText }>{'level: ' + props.threatLevel}</Text>
                    
                </View>
            </View>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.secondary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: 110,
        borderRadius: 15,
        
        borderColor: Colors.tertiary,
        padding: 10
    },
    numberText:{
        color: Colors.textAndSymbols,
        fontSize: 23,
        marginBottom: 10
    },
    threatText:
    {
        color: Colors.textAndSymbols,
        fontSize: 17
    }
});

export default Card;