import { View, Text, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default function Search() {
  return (
    <View className="flex-row items-center bg-search h-[54px] rounded-xl px-4">
      <View className="flex-row items-center gap-3">
        <Feather name="search" size={24} color="white" />
        <TextInput
          placeholder="Search"
          placeholderTextColor={"#8C8C8C"}
          className="text-[16px] text-[#fff] flex-1"
        />
      </View>
    </View>
  );
}
