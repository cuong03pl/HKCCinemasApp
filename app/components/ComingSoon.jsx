import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import { GetFilmsWithParams } from "../Services/ServiceAPI";
import { Link } from "expo-router";

export default function ComingSoon({ params, title, isUpcoming }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetFilmsWithParams(params);
        setData(response.data);
      } catch (error) {
        console.error("Lỗi Axios:", error);
      }
    };
    fetchData();
  }, [params]);
  return (
    <View className="my-[32px]">
      <View className="px-4 flex-row items-center justify-between">
        <Text className="text-[24px] text-primary font-bold">{title}</Text>
        <Link
          href={{
            pathname: "/home/seeall",
            params: { path: params },
          }}
          className="text-[14px] font-normal text-[#FCC434] "
        >
          See all
        </Link>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="flex-row gap-4 mt-6"
      >
        {data.map((item, index) => {
          return (
            <View key={index}>
              <MovieItem data={item} isUpcoming={isUpcoming} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
