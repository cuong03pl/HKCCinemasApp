import { View, Text, Image } from "react-native";
import React from "react";

export default function CommentItem() {
  return (
    <View className="mt-5">
      <View className="flex-row">
        <Image source={require("../../assets/Images/director.png")}></Image>
        <View className="min-h-[60px] w-full flex-1 ml-3 px-4 py-2 bg-search rounded-lg">
          <Text className="text-primary">Phim hay quá</Text>
        </View>
      </View>
    </View>
  );
}
