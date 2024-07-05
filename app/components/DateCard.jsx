import { View, Text } from "react-native";
import React from "react";

export default function DateCard() {
  return (
    <View className="flex-col border border-[#ccc] border-solid justify-center items-center rounded-xl mr-6 overflow-hidden">
      <View className="px-3 pb-2 pt-3 flex-row items-center w-full">
        <Text className="text-primary font-normal text-[16px]">Thứ 5</Text>
      </View>
      <View className="p-4 bg-[#8b868655] rounded-b-xl w-full">
        <Text className="text-primary text-center font-bold text-[24px]">
          04
        </Text>
      </View>
    </View>
  );
}
