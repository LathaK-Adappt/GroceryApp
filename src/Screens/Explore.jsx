//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { myColors } from '../Utils/MyColors';

// create a component
const Explore = () => {
    return (
        <View style={styles.container}>
            <Text>Explore</Text>
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
export default Explore;
