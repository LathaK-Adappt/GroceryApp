import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "./src/Screens/Onboarding";
import Signup from "./src/Screens/Signup";
import Login from "./src/Screens/Login";
import Splash from "./src/Screens/Splash";
import Details from "./src/Screens/Details";
import Cart from "./src/Screens/Cart";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";
import Orderplaced from "./src/Screens/Orderplaced";
import MainTabs from './src/Screens/MainTabs';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={MainTabs} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Onboard" component={Onboarding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="OrderPlaced" component={Orderplaced} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
