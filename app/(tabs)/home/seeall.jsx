import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonCustom from "../../components/ButtonCustom";
import MovieItem from "../../components/MovieItem";
import { GetFilmsWithParams } from "../../Services/ServiceAPI";
import { useLocalSearchParams } from "expo-router";
export default function seeall() {
  const { path } = useLocalSearchParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetFilmsWithParams(path);
        setData(response.data);
      } catch (error) {
        console.error("Lỗi Axios:", error);
      }
    };
    fetchData();
  }, [path]);
  return (
    <View className="bg-primary h-full w-full  px-[16px]">
      <StatusBar style="auto" />
      <SafeAreaView className=" pt-8">
        <View>
          <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
            <View className="flex-row flex-wrap justify-between mt-8 ">
              {data.map((item, index) => {
                return <MovieItem key={index} data={item} />;
              })}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}
