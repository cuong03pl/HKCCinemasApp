import {
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonCustom from "../components/ButtonCustom";
import { StatusBar } from "expo-status-bar";
import { Link, router } from "expo-router";
import { Login } from "../Services/ServiceAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Octicons from "@expo/vector-icons/Octicons";
export default function signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const handleLogin = async () => {
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);

      const respone = await Login(formData);
      if (respone.data) {
        await AsyncStorage.setItem("token", respone.data);
        const value = await AsyncStorage.getItem("token");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleTogglePassword = () => {
    setIsHidden(() => (isHidden == true ? false : true));
  };
  return (
    <KeyboardAvoidingView
      className="flex-1 h-full"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          <View className="bg-primary h-full w-full ">
            <StatusBar style="auto" />
            <SafeAreaView className="px-4 flex justify-between ">
              <View className="flex justify-center items-center">
                <Image
                  className="w-[329px] h-[329px]"
                  source={require("../../assets/Images/LoginImage.png")}
                ></Image>
              </View>
              <View className="pt-4 w-full">
                <View className="mb-4">
                  <Text className="text-subtext text-[16px] font-medium mb-2">
                    Email
                  </Text>
                  <TextInput
                    placeholder="Nhập username"
                    onChangeText={(username) => setUsername(username)}
                    defaultValue={username}
                    placeholderTextColor="#7B7B8B"
                    className="bg-[#1E1E2D] w-full p-[16px] text-[16px] rounded-lg font-semibold text-[#fff]"
                    autoComplete="off"
                  />
                </View>

                <View>
                  <Text className="text-subtext text-[16px] font-medium mb-2">
                    Password
                  </Text>
                  <View className="flex-row bg-[#1E1E2D] p-[16px] rounded-lg w-full items-center">
                    <TextInput
                      textContentType="password"
                      secureTextEntry={isHidden}
                      placeholder="Nhập mật khẩu"
                      onChangeText={(password) => setPassword(password)}
                      defaultValue={password}
                      placeholderTextColor="#7B7B8B"
                      className="  flex-1 font-semibold text-[16px] text-[#fff] mr-2"
                      autoComplete="off"
                    />
                    {!isHidden ? (
                      <Octicons
                        onPress={handleTogglePassword}
                        name="eye"
                        size={24}
                        color="white"
                      />
                    ) : (
                      <Octicons
                        onPress={handleTogglePassword}
                        className="hidden"
                        name="eye-closed"
                        size={24}
                        color="white"
                      />
                    )}
                  </View>
                </View>

                <View className="w-full mt-4">
                  <ButtonCustom
                    title="Đăng nhập"
                    classWind="bg-btnSignIn text-[#000] w-full flex justify-center items-center h-[56px] rounded-full"
                    classText="font-bold text-[20px]"
                    handlePress={() => handleLogin()}
                  ></ButtonCustom>
                  <View className="flex gap-1 flex-row items-center justify-center mt-3">
                    <Text className="text-[14px] font-normal text-[#fff]">
                      Bạn chưa có tài khoản?
                    </Text>
                    <Link
                      className="text-[#FF9001] ml-2 block"
                      href={"/signup"}
                    >
                      Đăng kí
                    </Link>
                  </View>
                </View>
              </View>
            </SafeAreaView>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
