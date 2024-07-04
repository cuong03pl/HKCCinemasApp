import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "../../components/Search";
import CinemasItem from "../../components/CinemasItem";
import CinemasDetail from "../../components/CinemasDetail";
export default function cinemas() {
  return (
    <View className="bg-primary h-full w-full pb-[70px] px-[16px]">
      <StatusBar style="auto" />
      <SafeAreaView className=" ">
        <View className="mb-4 ">
          <Text className="text-center text-primary text-[28px] font-bold">
            Chọn rạp chiếu
          </Text>
        </View>
        <ScrollView>
          {/* search */}
          <View>
            <Search placeholder={"Tìm rạp phim"} />
          </View>
          {/* danh sach rap */}
          <View className="mt-6 pt-4 pb-2 bg-[#2a2a2a95] rounded-lg">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 15 }}
              className="flex-row "
            >
              <CinemasItem />
              <CinemasItem />
              <CinemasItem />
              <CinemasItem />
              <CinemasItem />
            </ScrollView>
          </View>
          {/* danh sach cac rap con */}

          <View className="mt-5">
            <View>
              <Text className="text-primary font-bold text-[24px] mb-2">
                CGV (24)
              </Text>
            </View>
            <View>
              <CinemasDetail />
              <CinemasDetail />
              <CinemasDetail />
              <CinemasDetail />
              <CinemasDetail />
              <CinemasDetail />
              <CinemasDetail />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
