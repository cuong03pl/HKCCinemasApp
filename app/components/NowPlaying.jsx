import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function NowPlaying({ data }) {
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
        {data.map((item, index) => {
          return (
            <View key={index} className="flex-col items-center">
              <Image
                className="w-[310px] min-h-[440px] rounded-xl"
                src={`https://hkccinemas.azurewebsites.net/${item.image}`}
              ></Image>
              <View className="flex-col items-center mt-4">
                <Link
                  numberOfLines={1}
                  href={{
                    pathname: "/home/moviedetail",
                    params: { id: item.id },
                  }}
                  className="text-[24px] max-w-[300px] text-center line-clamp-1 font-bold text-primary "
                >
                  {item.title}
                </Link>
                <Text className="text-subtext">
                  {`${item.duration}m`} • Action, adventure, sci-fi
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
