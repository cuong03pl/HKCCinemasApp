import { View, Text, Image } from "react-native";
import React from "react";
import TimeCard from "./TimeCard";

export default function MovieCard() {
  return (
    <View className="p-2  rounded-xl  border-b border-solid border-[#9d9d9dcf]">
      <View className="flex-row items-center justify-between">
        <Text className="text-primary font-medium max-w-[240px] text-[22px]">
          Những mảnh ghép hạnh phúc
        </Text>
        <Text className="text-title text-[16px] font-medium">Chi tiết</Text>
      </View>

      <View className="flex-row items-center py-3">
        <Text className="text-primary font-normal text-[16px] ">
          Hài, Hoạt Hình
        </Text>
        <Text className="text-primary font-thin text-[16px]"> | </Text>
        <Text className="text-primary font-normal text-[16px]">125 phút</Text>
      </View>

      <View className="flex-row">
        <View className="w-[30%] max-h-[150px] rounded-xl border border-solid border-[#cccccc76] mr-4">
          <Image
            className="w-full h-[150px] rounded-xl"
            source={require("../../assets/Images/comingsoon1.png")}
          ></Image>
        </View>
        <View className="max-w-[70%] flex-row flex-wrap ">
          <TimeCard />
          <TimeCard />
          <TimeCard />
          <TimeCard />
          <TimeCard />
        </View>
      </View>
    </View>
  );
}
