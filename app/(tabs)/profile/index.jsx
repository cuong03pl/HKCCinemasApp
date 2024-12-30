import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Fontisto, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function profile() {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const user = JSON.parse(await AsyncStorage.getItem("user"));
      setUser(user.data);
      console.log(user);
    };
    fetchData();
  }, []);
  const handleLogOut = async () => {
    await AsyncStorage.clear();
    router.push("/");
  };
  return (
    <View className="bg-primary h-full w-full pb-[140px] px-[16px]">
      <StatusBar style="auto" />
      <SafeAreaView>
        <View className="flex-row mt-8">
          <View className="mr-6">
            <Image
              className="h-[90px] w-[90px]"
              source={require("../../../assets/Images/director.png")}
            />
          </View>
          <View>
            <Text className="text-[32px] text-primary font-bold">
              {/* {user?.userName} */}
            </Text>
            <View className="flex-row items-center mt-4">
              <Fontisto name="email" size={20} color="#DEDEDE" />
              <Text className="text-[#DEDEDE] ml-1">{user?.email}</Text>
            </View>
          </View>
        </View>
        <View className="mt-8">
          <TouchableOpacity
            onPress={handleLogOut}
            className="border-b border-solid border-[#ccc] py-6"
          >
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="ticket-outline" size={32} color="#FFFFFF" />
                <Text className="text-[16px] text-primary font-bold ml-4">
                  My ticket
                </Text>
              </View>
              <View>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={24}
                  color="#FFFFFF"
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="border-b border-solid border-[#ccc] py-6">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="ticket-outline" size={32} color="#FFFFFF" />
                <Text className="text-[16px] text-primary font-bold ml-4">
                  My ticket
                </Text>
              </View>
              <View>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={24}
                  color="#FFFFFF"
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="border-b border-solid border-[#ccc] py-6">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="ticket-outline" size={32} color="#FFFFFF" />
                <Text className="text-[16px] text-primary font-bold ml-4">
                  My ticket
                </Text>
              </View>
              <View>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={24}
                  color="#FFFFFF"
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="border-b border-solid border-[#ccc] py-6">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="ticket-outline" size={32} color="#FFFFFF" />
                <Text className="text-[16px] text-primary font-bold ml-4">
                  My ticket
                </Text>
              </View>
              <View>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={24}
                  color="#FFFFFF"
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
