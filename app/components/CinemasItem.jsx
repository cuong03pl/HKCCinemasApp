import { View, Text, Image } from "react-native";
import React from "react";
import { IMAGE_URL } from "@env";
export default function CinemasItem({ item, isSelected }) {
  return (
    <View className="mr-4">
      <View
        className={`border-[2px] border-solid  rounded-lg ${
          isSelected ? "border-[#fc5934]" : "border-[#908e8e]"
        }`}
      >
        <Image
          className={`w-[80px] h-[80px] rounded-lg`}
          source={{ uri: `${IMAGE_URL}${item?.image}` }}
        ></Image>
      </View>
      <Text className="text-center text-primary mt-1">{item?.name}</Text>
    </View>
  );
}
