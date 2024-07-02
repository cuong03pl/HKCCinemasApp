import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import MovieItem from "./MovieItem";

export default function ComingSoon() {
  return (
    <View className="my-[32px]">
      <View className="px-4 flex-row items-center justify-between">
        <Text className="text-[24px] text-primary font-bold">Coming Soon</Text>
        <Text className="text-[14px] font-normal text-[#FCC434] ">See all</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="flex-row gap-4 mt-6"
      >
        <View>
          <MovieItem />
        </View>
        <View>
          <MovieItem />
        </View>
        <View>
          <MovieItem />
        </View>
      </ScrollView>
    </View>
  );
}
