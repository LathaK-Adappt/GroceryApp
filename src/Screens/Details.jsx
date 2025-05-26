import { View, Text, Image, TouchableOpacity, StatusBar} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DropBox from "../Components/DropBox";
import { myColors } from "./../Utils/MyColors";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../Redux/CartSlice";
import AntDesign from 'react-native-vector-icons/AntDesign';

const Details = ({ route }) => {
  const storeData = useSelector((state) => state.CartSlice);
  const dispatch = useDispatch();
  const productData = route.params.main;
  const { name, price, weight, img } = productData;

  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, gap: 20, backgroundColor: "white" }}>
      <StatusBar backgroundColor="white" />
      <View>
        <Image
          resizeMode="contain"
          style={{
            height: 300,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
          source={{
            uri: img,
          }}
        />
        <View
          style={{
            flexDirection: "row",

            justifyContent: "space-between",
            position: "absolute",
            width: "100%",
            paddingHorizontal: 15,
            alignItems: "center",
          }}
        >
          <Ionicons
            onPress={() => {
              nav.goBack();
            }}
            name="chevron-back"
            size={28}
            color="black"
          />
          <FeatherIcons name="share" size={28} color="black" />
        </View>
      </View>
      <View
        style={{ paddingHorizontal: 15, backgroundColor: "white", flex: 1 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 25, color: "black", fontWeight: "600" }}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Text>
          <MaterialIcons name="cards-heart-outline" size={30} color="dimgray" />
        </View>
        <Text style={{ marginTop: 5, fontSize: 15, color: "grey" }}>
          {weight}, Price
        </Text>
         <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              gap: 10,
                            }}
                          >
                            <AntDesign
                              name="minuscircleo"
                              size={28}
                              color={myColors.primary}
                              onPress={() => {
                                dispatch(decrementQuantity(item));
                              }}
                            />
                            <Text style={{ fontSize: 17 }}>8</Text>
                            <AntDesign
                              name="pluscircleo"
                              size={28}
                              color={myColors.primary}
                              onPress={() => {
                                if (item.quantity == 7) { 
                                } else {
                                  dispatch(incrementQuantity(item));
                                }
                              }}
                            />
                          </View>
        <Text
          style={{
            marginTop: 5,
            fontSize: 28,
            color: "black",
            fontWeight: "bold",
          }}
        >
          ₹ {price}
        </Text>
        <DropBox />
        <View
          style={{
            flex: 0.9,
            justifyContent: "flex-end",
          }}
        >
          {storeData.some((value) => value.name == productData.name) ? (
            <TouchableOpacity
              disabled={true}
              activeOpacity={0.8}
              style={{
                backgroundColor: "#E3E3E3",
                borderRadius: 10,
                height: 70,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "black", fontSize: 18, fontWeight: "700" }}>
                Added to Basket
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                dispatch(addToCart(productData));
                nav.navigate("Cart");
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
              <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
                Order Now
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;
