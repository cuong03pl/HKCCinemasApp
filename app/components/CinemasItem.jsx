import { View, Text, Image } from "react-native";
import React from "react";

export default function CinemasItem() {
  return (
    <View className="mr-4">
      <View className="border border-solid border-[#908e8e] rounded-lg">
        <Image
          className="w-[80px] h-[80px] "
          source={require("../../assets/Images/LoginImage.png")}
        ></Image>
      </View>
      <Text className="text-center text-primary mt-1">Lotte</Text>
    </View>
  );
}
