import { View, Text, Image } from "react-native";
import React from "react";

export default function Empty() {
  return (
    <View className=" flex items-center justify-center h-full">
      <Text className="text-white text-[20px]">Không có vé nào được đặt</Text>
    </View>
  );
}
