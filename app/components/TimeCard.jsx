import { View, Text } from "react-native";
import React from "react";

export default function TimeCard() {
  return (
    <View className="border border-solid border-[#b1acacb7]  rounded-xl mr-2 mb-2 overflow-hidden">
      <View className="flex-row items-center p-2 justify-center">
        <Text className="text-[12px] font-normal text-primary">18:30</Text>
        <Text className="text-[12px] opacity-80 text-primary">~</Text>
        <Text className="text-[12px] font-normal text-primary">18:30</Text>
      </View>
      <View className=" bg-[#ffffff42] py-2 px-4">
        <Text className="text-[12px] font-light text-primary">Còn 296/296</Text>
      </View>
    </View>
  );
}
