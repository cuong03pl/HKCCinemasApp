import { View, Text, Image } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

export default function TicketItem() {
  return (
    <View className="bg-search rounded-xl mb-4 ">
      <View className="flex-row items-center">
        <Image
          className="w-[99px] h-[138px]"
          source={require("../../assets/Images/Slider1.png")}
        ></Image>

        <View className="flex-col ml-4">
          <Text className="text-[20px] font-bold text-primary">
            Avengers: Infinity War
          </Text>
          <View className="flex-row  items-center mt-5 mb-4">
            <EvilIcons name="clock" size={16} color="#F2f2f2" />
            <Text className="text-primary ml-1">14h15’ • 16.12.2022</Text>
          </View>
          <View className="flex-row  items-center">
            <EvilIcons name="location" size={16} color="#F2f2f2" />
            <Text className="text-primary ml-1">Vincom Ocean Park CGV</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
