import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Header({ title }) {
  return (
    <View className=" flex-row items-center  relative px-2 py-3">
      <View className="bg-[#ffffff33] ml-2 p-2 rounded-full absolute flex items-center justify-center">
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="left" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center w-full">
        <Text className="text-primary text-center font-bold text-[20px]">
          {title}
        </Text>
      </View>
    </View>
  );
}
