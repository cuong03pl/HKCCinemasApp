import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Header() {
  return (
    <View className=" flex-row items-center py-4 relative px-2">
      <View className="bg-[#ffffff33] ml-2 p-2 rounded-full absolute flex items-center justify-center">
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="left" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center w-full">
        <Text className="text-primary text-center font-bold text-[20px]">
          CGV Ba Trieu
        </Text>
      </View>
    </View>
  );
}
