import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { myColors } from "../Utils/MyColors";
import { useNavigation } from "@react-navigation/native";

const Orderplaced = () => {
  const nav = useNavigation();
 
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar backgroundColor="white" />
      <Image source={require('../assets/orderAccept.png')} color={myColors.primary} style={{right: 10}} />
      <Text style={{ fontSize: 30, textAlign: "center", margin:25 }}>
        Your Order has been accepted
      </Text>
      <Text style={{textAlign:'center', justifyContent:'center', margin:15}}>
        Your items has been placcd and is on 
        it’s way to being processed
      </Text>
       <View style={{marginTop: 25}}>
              <TouchableOpacity
                onPress={() => {
                  nav.navigate("Home");
                }}
                activeOpacity={0.8}
                style={{
                  backgroundColor: myColors.primary,
                  borderRadius: 10,
                  height: 70,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                
                  <Text style={{ color: "white", fontSize: 18, fontWeight: "700", paddingHorizontal:25 }}>
                    Back to Home
                  </Text>
                  
              
              </TouchableOpacity>
            </View>
    </View>
    
  );
};

export default Orderplaced;
