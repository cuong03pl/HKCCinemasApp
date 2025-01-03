import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { convertTimeSpan } from "../utils/function";
import { convertTime } from "../utils/convertTime";
import { IMAGE_URL } from "@env";
export default function TicketItem({ ticket }) {
  return (
    <View className="bg-search rounded-xl mb-4 ">
      <View className="flex-row items-center">
        <Image
          className="w-[99px] h-[138px]"
          source={{
            uri: `${IMAGE_URL}${ticket?.detail[0]?.schedule?.film?.image}`,
          }}
        ></Image>

        <View className="flex-col ml-4">
          <Text className="text-[20px] font-bold text-primary">
            {ticket?.detail[0]?.schedule?.film?.title}
          </Text>
          <View className="flex-row  items-center mt-5 mb-4">
            <EvilIcons name="clock" size={16} color="#F2f2f2" />
            <Text className="text-primary ml-1">
              {convertTimeSpan(ticket?.detail[0]?.schedule?.startTime)} •{" "}
              {convertTime(ticket?.detail[0]?.schedule?.showDate?.date)}
            </Text>
          </View>
          <View className="flex-row  items-center">
            <EvilIcons name="location" size={16} color="#F2f2f2" />
            <Text className="text-primary ml-1">
              {ticket?.detail[0]?.schedule?.cinemas?.name}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
