import { View, Text, Image, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { myColors } from "./../Utils/MyColors";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Splash = () => {
  const nav = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem("id").then((value) => {
        if (value) {
          nav.replace("Home");
        } else {
          nav.replace("Login");
        }
      });
    }, 2000);
  }, []);

  return (
    <View
      style={{
        backgroundColor: myColors.primary,
        flex: 1,
        justifyContent: "center",
      }}
    >
      <StatusBar style="light" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 15,
        }}
      >
        <Image
          style={{ tintColor: "white", height: 75, width: 65 }}
          source={require("../assets/apple.png")}
        />
        <View>
          <Text style={{ fontSize: 75, color: myColors.secondary }}>
            Fresh
          </Text>
          <Text
            style={{
              color: myColors.secondary,
              fontSize: 17,
              textAlign: "center",
              letterSpacing: 5,
              top: -15,
            }}
          >
            online groceriet
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Splash;
