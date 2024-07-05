import { View, Text, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import DateCard from "../../components/DateCard";
import Header from "../../components/Header";
import MovieCard from "../../components/MovieCard";

export default function cinemasdetails() {
  return (
    <View className="bg-primary h-full w-full px-[16px]  flex-1">
      <StatusBar style="auto" />
      <SafeAreaView className=" ">
        <Header />
        <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
          <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizontal: 16 }}
            className="mt-6"
          >
            <DateCard />
            <DateCard />
            <DateCard />
            <DateCard />
            <DateCard />
            <DateCard />
          </ScrollView>
          <View className="px-4 mt-4">
            <View className=" bg-[#2E2E2E] rounded-xl">
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
