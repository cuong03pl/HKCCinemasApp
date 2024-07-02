import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function MovieItem() {
  return (
    <View className="flex-col items-center max-w-[172px] mb-4">
      <Image source={require("../../assets/Images/comingsoon1.png")}></Image>
      <View className="flex-col mt-4">
        <Text className="text-[16px] font-bold text-title">
          Avatar 2: The Way Of Water
        </Text>
        <View className="mt-3 ">
          <View className="flex-row gap-2">
            <AntDesign name="videocamera" size={16} color="#F2F2F2" />
            <Text className="text-primary">Adventure, Sci-fi</Text>
          </View>
          <View className="flex-row gap-2">
            <AntDesign name="calendar" size={16} color="#F2F2F2" />
            <Text className="text-primary">20.12.2022</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
