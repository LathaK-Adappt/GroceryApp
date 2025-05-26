import { View, Text, Image } from "react-native";
import React from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";

const HomeBanner = () => {
  return (
    <View >
      <Image  source={require("../assets/banner.png")} />
    </View>
  );
};

export default HomeBanner;
