//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { myColors } from '../Utils/MyColors';

// create a component
const Onboarding = () => {
    return (
        <View style={styles.container}>
            
            <ImageBackground source={require('../assets/onbording.jpg')}/>
            <Image style={{tintColor: myColors.primary}} source={require('../assets/apple.png')}/>
            <Text></Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Onboarding;
