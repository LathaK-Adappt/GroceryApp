import React, { useEffect } from 'react';
import {View, Text, Image, StatusBar, StyleSheet, Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {myColors} from '../Utils/MyColors'; // Ensure your theme is correctly imported
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const nav = useNavigation();
    useEffect(()=>{
    setTimeout(()=>{
      nav.replace('Signup')  
    },2000)
    },[])
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.contentRow}>
        <Image
          style={styles.logo}
          source={require('../assets/apple.png')}
        />
        <View>
          <Text style={styles.title}>Fresh</Text>
          <Text style={styles.subtitle}>online groceriet</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp('4%'),
  },
  logo: {
    height: hp('10%'),
    width: wp('15%'),
    resizeMode: 'contain',
  },
  title: {
    fontSize: wp('15%'),
    fontWeight: 'bold',
    color: myColors.secondary,
  },
  subtitle: {
    color: myColors.secondary,
    textAlign: 'center',
    fontSize: wp('4%'),
    letterSpacing: 5,
    marginLeft: wp('1%'),
    marginTop: -hp('0.5%'),
  },
});

export default SplashScreen;
