import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Animated, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
import Colors from '../constants/colors';

import { Ionicons, FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';


const SearchBar = props => {
    const [outerViewX, setOuterViewX] = useState(null);
    const [outerViewY, setOuterViewY] = useState(null);
    const [outerViewWidth, setOuterViewWidth] = useState(null);
    const [outerViewHeight, setOuterViewHeight] = useState(null);

    const [isFocused, setIsFocused] = useState(false);
    const [hasText, setHasText] = useState(false);
    const [enteredValue, setEnteredValue] = useState('');


    const clearInputFunc = () => {setEnteredValue(''); setHasText(false);};
    const backFunc = () => { setIsFocused(false); Keyboard.dismiss();};

    const onFocusFunc = () => {
        props.onFocus();
        setIsFocused(true);

    };

    const onEndEditingFunc = () => {
        props.onEndEditing();
        setIsFocused(false);
    };

    const onChangeTextFunc = (text) => {
        setEnteredValue(text);
        if (text.length > 0)
            setHasText(true);
        else
            setHasText(false);
    };

    const getLeftIcons = () => {
        if (!isFocused) {
            return (
                <TouchableOpacity>
                    <FontAwesome name="bars" color='black' size={outerViewHeight - 20} />
                </TouchableOpacity>);
        }
        else {
            return (
                <TouchableOpacity onPress={backFunc}>
                    <AntDesign name="arrowleft" color='black' size={outerViewHeight - 25} />
                </TouchableOpacity>);
        }
    };

    const getCrossIcon = () => {
        if (!hasText) {
            return (<View></View>);
        }
        else {
            return (
                <TouchableOpacity onPress={clearInputFunc}>
                    <AntDesign name="close" color='black' size={outerViewHeight - 25} style={{ marginRight: 10 }} />
                </TouchableOpacity>
            );
        }
    };
    return (
        <Animated.View style={{ ...styles.container, ...props.containerStyle }} onLayout={(event) => {
            setOuterViewHeight(parseInt(event.nativeEvent.layout.height));
        }} >

            {getLeftIcons()}

            <TextInput
                placeholder={props.placeholderText}
                placeholderTextColor={Colors.placeholderText}
                keyboardAppearance='dark'
                onFocus={onFocusFunc}
                onEndEditing={onEndEditingFunc}
                onChangeText={onChangeTextFunc}
                value={enteredValue}
                style={{ ...styles.input, fontSize: outerViewHeight - 30, ...styles.inputStyle }} />
            {getCrossIcon()}
            <TouchableOpacity>
                <Ionicons name="ios-search" color='black' size={outerViewHeight - 20} />
            </TouchableOpacity>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.secondary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        width: '80%',
        height: 50,
        borderRadius: 10,
        
        borderColor: Colors.tertiary
    },
    input:
    {
        flex: 1,
        height: '100%',
        color: 'white',
        marginHorizontal: 10
    }
});

export default SearchBar;