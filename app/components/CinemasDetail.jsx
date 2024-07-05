import { View, Text, Image } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function CinemasDetail() {
  return (
    <Link href="/cinemas/seat" className="no-underline">
      <View className="flex-row items-center pt-3 border-b border-[#908e8e84] border-solid pb-4">
        <View className="border border-solid border-[#908e8e] rounded-lg mr-4">
          <Image
            className="w-[60px] h-[60px]"
            source={require("../../assets/Images/LoginImage.png")}
          />
        </View>
        <View className=" flex-row mr-4">
          <View>
            <Text className="text-primary font-bold text-[18px] mb-2">
              CGV Vincom
            </Text>
            <View className="w-[300px]">
              <Text className="text-subtext text-[16px]">
                134/44/3 Cầu Diễn, Hà Nội. dhsd asd daaaa d asd sad ad asd sdas
                dsa d sd d ad d d d ad d s
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Link>
  );
}
