import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonCustom from "../components/ButtonCustom";
import { Link, router } from "expo-router";

export default function signup() {
  return (
    <View className="bg-primary h-full w-full ">
      <StatusBar style="auto" />
      <SafeAreaView className="px-4 flex justify-between ">
        <View className="flex justify-center items-center">
          <Image
            className="w-[329px] h-[329px]"
            source={require("../../assets/Images/LoginImage.png")}
          ></Image>
        </View>
        <View>
          <Text className="text-subtext text-[16px] font-medium">Email</Text>
          <TextInput
            placeholder="Nhập email"
            placeholderTextColor="#7B7B8B"
            className="bg-[#1E1E2D] w-full p-[16px] rounded-lg font-semibold text-[#fff]"
          />
          <Text className="text-subtext text-[16px] font-medium">Username</Text>
          <TextInput
            placeholder="Nhập tên tài khoản"
            placeholderTextColor="#7B7B8B"
            className="bg-[#1E1E2D] p-[16px] rounded-lg font-semibold  text-[#fff]"
          />
          <Text className="text-subtext text-[16px] font-medium">Password</Text>
          <TextInput
            placeholder="Nhập mật khẩu"
            placeholderTextColor="#7B7B8B"
            className="bg-[#1E1E2D] p-[16px] rounded-lg font-semibold text-[#fff]"
          />
          <View className="w-full mt-4">
            <ButtonCustom
              title="Đăng kí"
              classWind="bg-btnSignIn text-[#000] w-full flex justify-center items-center h-[56px] rounded-full"
              classText="font-bold text-[20px]"
              handlePress={() => router.push("/")}
            ></ButtonCustom>
            <View className="flex gap-1 flex-row items-center justify-center mt-3">
              <Text className="text-[14px] font-normal text-[#fff]">
                Bạn đã có tài khoản?
              </Text>
              <Link className="text-[#FF9001] ml-2 block" href={"/signin"}>
                Đăng nhập
              </Link>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
