import { View, Text } from "react-native";
import React from "react";
import { getDayOfWeek, isCurrentDay } from "../utils/function";
import { convertTime } from "../utils/convertTime";

export default function DateCard({ date, isDate }) {
  return (
    <View
      className={`w-20 flex-col border ${
        isDate ? "border-[#fc5934]" : "border-[#ccc]"
      }   border-solid justify-center items-center rounded-xl mr-6 overflow-hidden`}
    >
      <View className="px-3 pb-2 pt-3 flex-row items-center justify-center w-full">
        <Text className="text-primary font-normal text-[16px] ">
          {isCurrentDay(date?.date) ? "Today" : getDayOfWeek(date?.date)}
        </Text>
      </View>
      <View className="p-4 bg-[#8b868655] rounded-b-xl w-full">
        <Text className="text-primary text-center font-bold text-[24px]">
          {convertTime(date?.date).split(".")[0]}
        </Text>
      </View>
    </View>
  );
}
