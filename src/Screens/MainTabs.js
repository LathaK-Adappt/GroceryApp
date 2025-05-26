// src/Navigation/MainTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Shop from '../Screens/Shop';
import Explore from '../Screens/Explore';
import Cart from '../Screens/Cart';
import Favourite from '../Screens/Favourite';
import Account from '../Screens/Account';
import { myColors } from '../Utils/MyColors';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Shop':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Explore':
              iconName = focused ? 'search' : 'search-outline';
              break;
            case 'Cart':
              iconName = focused ? 'cart' : 'cart-outline';
              break;
            case 'Favourite':
              iconName = focused ? 'heart' : 'heart-outline';
              break;
            case 'Account':
              iconName = focused ? 'person' : 'person-outline';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: myColors.primary,
        tabBarInactiveTintColor: myColors.third,
      })}
    >
      <Tab.Screen name="Shop" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favourite" component={Favourite} />
      <Tab.Screen name="Account" component={Login} />
    </Tab.Navigator>
  );
}
