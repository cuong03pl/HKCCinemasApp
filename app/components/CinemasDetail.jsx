import { View, Text, Image } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function CinemasDetail() {
  return (
    <View className="flex-row items-center pt-3 border-b border-[#908e8e84] border-solid pb-4">
      <View className="border border-solid border-[#908e8e] rounded-lg mr-4">
        <Image
          className="w-[60px] h-[60px] "
          source={require("../../assets/Images/LoginImage.png")}
        ></Image>
      </View>
      <View className="flex-row flex-1 justify-between items-center">
        <View>
          <Text className="text-primary font-bold text-[18px] mb-2">
            CGV Vincom
          </Text>
          <Text className="text-subtext     text-[16px]">
            134/44/3 Cầu diễn hà nội dhsd asd d d asd sad ad asd sdas dsa
          </Text>
        </View>
        <View>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#FFFFFF" />
        </View>
      </View>
    </View>
  );
}
