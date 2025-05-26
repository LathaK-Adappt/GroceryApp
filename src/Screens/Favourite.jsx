//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { myColors } from '../Utils/MyColors';

// create a component
const Favourite = () => {
    return (
        
        <View style={styles.container}>
            <StatusBar style='dark'/>
            <Text style={{color: 'white'}}>Favourite</Text>
        </View>
       
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: myColors.primary,
    },
});

//make this component available to the app
export default Favourite;
