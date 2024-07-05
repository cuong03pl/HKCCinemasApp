import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function NowPlaying() {
  return (
    <View className="my-[32px]">
      <View className="px-4 flex-row items-center justify-between">
        <Text className="text-[24px] text-primary font-bold">Now playing</Text>
        <Text className="text-[14px] font-normal text-[#FCC434] ">See all</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="flex-row gap-4 mt-6"
      >
        <View className="flex-col items-center">
          <Image
            className="w-[310px] min-h-[440px]"
            source={require("../../assets/Images/Slider1.png")}
          ></Image>
          <View className="flex-col items-center mt-4">
            <Link
              href={"/home/moviedetail"}
              className="text-[24px] font-bold text-primary"
            >
              Avengers - Infinity War
            </Link>
            <Text className="text-subtext">
              2h29m • Action, adventure, sci-fi
            </Text>
          </View>
        </View>
        <View className="flex-col items-center">
          <Image
            className="w-[310px] min-h-[440px]"
            source={require("../../assets/Images/Slider1.png")}
          ></Image>
          <View className="flex-col items-center mt-4">
            <Link
              href={"/home/moviedetail"}
              className="text-[24px] font-bold text-primary"
            >
              Avengers - Infinity War
            </Link>
            <Text className="text-subtext">
              2h29m • Action, adventure, sci-fi
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
