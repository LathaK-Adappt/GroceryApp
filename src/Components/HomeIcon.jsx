import { View, Text, Image } from "react-native";
import React from "react";
import { myColors } from "../Utils/MyColors";

const HomeIcon = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        style={{ width: 40, height: 45, tintColor: myColors.primary }}
        source={require("../assets/apple.png")}
      />
    </View>
  );
};

export default HomeIcon;
