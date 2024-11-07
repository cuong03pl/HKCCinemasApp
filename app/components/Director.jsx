import { View, Text, Image } from "react-native";
import React from "react";

export default function Director({ data }) {
  return (
    <View className="w-[150px] bg-search flex-row p-[12px] rounded-xl mr-4 h-[58px]">
      <Image
        className="w-[36px] h-[36px] rounded-full"
        src={`https://hkccinemas.azurewebsites.net/${data?.image}`}
      />
      <Text className="text-[14px] text-primary ml-3 flex-1 flex-wrap">
        {data?.name}
      </Text>
    </View>
  );
}
