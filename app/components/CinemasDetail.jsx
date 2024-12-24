import { View, Text, Image } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { IMAGE_URL } from "@env";
export default function CinemasDetail({ cinemas }) {
  return (
    <Link href="/cinemas/cinemasdetails" className="no-underline">
      <View className="flex-row items-center pt-3 border-b border-[#908e8e84] border-solid pb-4">
        <View className=" rounded-lg mr-4">
          <Image
            className="w-[60px] h-[60px] rounded-lg border border-solid border-[#908e8e]"
            source={{
              uri: `${IMAGE_URL}${cinemas.image}`,
            }}
          />
        </View>
        <View className=" flex-row mr-4">
          <View>
            <Text className="text-primary font-bold text-[18px] mb-2">
              {cinemas?.name}
            </Text>
            <View className="w-[300px]">
              <Text className="text-subtext text-[16px]">
                {cinemas?.address}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Link>
  );
}
