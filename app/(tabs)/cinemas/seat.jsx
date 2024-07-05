import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Col, Grid } from "react-native-easy-grid";
import ButtonCustom from "../../components/ButtonCustom";
export default function seat() {
  const [seats, setSeats] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ]);
  return (
    <View className="bg-primary h-full w-full flex-1">
      <StatusBar style="auto" />
      <SafeAreaView className=" ">
        <Header />
        <View className="flex-col justify-between h-full ">
          <View className="px-[16px]">
            <View className="flex flex-col justify-center items-center py-8 ">
              <View className="flex flex-col mb-8">
                <View className="w-[256px] h-[4px] bg-white"></View>
                <Text className="text-center text-white mt-2">Màn hình</Text>
              </View>
              <View className=" flex-row flex-wrap justify-center gap-1   ">
                {seats.map((seat, index) => {
                  return (
                    <View
                      key={index}
                      className="bg-[#722ed1] w-[40px] h-[40px] text-white rounded-lg flex items-center justify-center "
                    >
                      <Text className="text-primary">{seat}</Text>
                    </View>
                  );
                })}
              </View>
              <View className="flex-row gap-6 mt-4">
                <View className="flex items-center gap-2">
                  <View className="bg-[#404040] w-[40px] h-[40px] rounded-md"></View>
                  <Text className="text-white">Đã đặt</Text>
                </View>
                <View className="flex items-center gap-2">
                  <View className="bg-[#722ed1] w-[40px] h-[40px] rounded-md"></View>
                  <Text className="text-white">Ghế thường</Text>
                </View>
                <View className="flex items-center gap-2">
                  <View className="bg-[#f5222d] w-[40px] h-[40px] rounded-md"></View>
                  <Text className="text-white">Ghế VIP</Text>
                </View>
              </View>
            </View>
          </View>
          <View className="flex-1 border-t border-solid border-[#ccc] max-h-[300px] px-4 py-2">
            <View>
              <Text className="text-primary text-[24px] font-bold">
                Kẻ trộm mặt trăng
              </Text>
              <View className="mt-1">
                <Text className="text-title">15:00 ~ 17:03 | Thứ 6, 05/07</Text>
              </View>
              <View className="flex-row items-center justify-between mt-4">
                <Text className="text-primary">Tạm tính</Text>
                <Text className="text-primary font-semibold text-[20px]">
                  150.000d
                </Text>
              </View>
              <ButtonCustom
                title="Thanh toán"
                classWind="bg-btnSignIn text-[#000] w-full flex justify-center items-center h-[48px] rounded-full mt-4"
                classText="font-bold text-[20px]"
              ></ButtonCustom>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
