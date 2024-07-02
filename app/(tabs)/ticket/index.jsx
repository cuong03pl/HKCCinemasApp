import { View, Text, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import TicketItem from "../../components/TicketItem";

export default function ticket() {
  return (
    <View className="bg-black h-full w-full px-4 pb-[70px]">
      <StatusBar style="auto" />
      <SafeAreaView>
        <View className="mb-4 mt-4">
          <Text className="text-center text-primary text-[28px] font-bold">
            My ticket
          </Text>
        </View>
        <ScrollView>
          <View className="mt-8">
            <TicketItem />
            <TicketItem />
            <TicketItem />
            <TicketItem />
            <TicketItem />
            <TicketItem />
            <TicketItem />
            <TicketItem />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
