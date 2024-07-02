import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonCustom from "./components/ButtonCustom";
import { Redirect, router } from "expo-router";

export default function App() {
  return (
    <View className="bg-primary h-full w-full">
      <StatusBar style="auto" />
      <SafeAreaView className="h-full flex justify-between items-center px-4">
        <View className="">
          <Text className="font-bold text-[#fff] text-[30px]">HKCCinemas</Text>
        </View>
        <View>
          <Image
            className="w-[329px] h-[329px]"
            source={require("../assets/Images/LoginImage.png")}
          ></Image>
          <Text className="font-bold text-[28px] text-white mt-10">
            HKCCinemas, Xin chào quý khách
          </Text>
        </View>

        <View className="w-full">
          <ButtonCustom
            title="Đăng nhập"
            classWind="bg-btnSignIn text-[#000] w-full flex justify-center items-center h-[56px] rounded-full"
            classText="font-bold text-[20px]"
            handlePress={() => router.push("/signin")}
          ></ButtonCustom>
          <ButtonCustom
            title="Đăng kí"
            classWind="bg-none text-[#000] w-full flex justify-center items-center h-[56px] rounded-full mt-[16px] border border-solid border-[#F2F2F2] "
            classText="font-bold text-[20px] text-[#fff]"
            handlePress={() => router.push("/signup")}
          ></ButtonCustom>
        </View>
      </SafeAreaView>
      <Redirect href={"/cinemas"} />
    </View>
  );
}
