import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
export default function cinemas() {
  return (
    <View className="bg-primary h-full w-full pb-[140px] px-[16px]">
      <StatusBar style="auto" />
      <SafeAreaView className=" pt-8"></SafeAreaView>
    </View>
  );
}
