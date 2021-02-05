import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import Colors from '../constants/colors';

const Card = props => {

    return (
        <TouchableOpacity onPress={() => { props.navigationProps.navigate({ routeName: 'Details', params: { lambDetails: props.cardDetails } }); }} style={{ width: '90%', alignItems: 'center' }}>

            <View style={styles.container} >
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ paddingLeft: 15 }}>
                        <Text style={styles.numberText}>{props.cardDetails.id}</Text>
                        <Text style={styles.threatText}>{'sex: ' + props.cardDetails.sex}</Text>
                        <Text style={styles.threatText}>{'date of birth: ' + props.cardDetails.dateOfLambing}</Text>
                        <Text style={styles.threatText}>{'date of mating: ' + props.cardDetails.dateOfMating}</Text>
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
        height: 140,
        borderRadius: 15,
        borderColor: Colors.tertiary,
        padding: 10,
        marginBottom: 10
    },
    numberText: {
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