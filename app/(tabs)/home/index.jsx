import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Search from "../../components/Search";
import NowPlaying from "../../components/NowPlaying";
import ComingSoon from "../../components/ComingSoon";
export default function home() {
  return (
    <View className="bg-primary h-full w-full pb-[70px]">
      <StatusBar style="auto" />
      <SafeAreaView className=" pt-8">
        <View className="px-4 pb-4">
          <Search />
        </View>
        <ScrollView>
          <View>
            <NowPlaying />
          </View>
          <View>
            <ComingSoon />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
