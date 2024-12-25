import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import TimeCard from "./TimeCard";
import { IMAGE_URL } from "@env";
import { convertTimeSpan } from "../utils/function";
import { GetAllCategoriesByFilmId } from "../Services/ServiceAPI";
export default function MovieCard({ schedule }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetAllCategoriesByFilmId(schedule.film.id);
        setCategories(response.data);
      } catch (error) {
        console.error("Lỗi Axios:", error);
      }
    };
    fetchData();
  }, [schedule]);
  return (
    <View className="p-2  rounded-xl  border-b border-solid border-[#9d9d9dcf]">
      <View className="flex-row items-center justify-between">
        <Text className="text-primary font-medium max-w-[240px] text-[22px]">
          {schedule?.film?.title}
        </Text>
        <Text className="text-title text-[16px] font-medium">Chi tiết</Text>
      </View>

      <View className="flex-row items-center py-3">
        {categories.map((category, index) => {
          return (
            <Text key={index} className="text-primary font-normal text-[16px] ">
              {category.name}
              {index < categories.length - 1 ? ", " : ""}
            </Text>
          );
        })}
        <Text className="text-primary font-thin text-[16px]"> | </Text>
        <Text className="text-primary font-normal text-[16px]">
          {schedule?.film?.duration} phút
        </Text>
      </View>

      <View className="flex-row">
        <View className="w-[30%] max-h-[150px] rounded-xl border border-solid border-[#cccccc76] mr-4">
          <Image
            className="w-full h-[150px] rounded-xl"
            source={{ uri: `${IMAGE_URL}${schedule?.film.image}` }}
          ></Image>
        </View>
        <View className="max-w-[70%] flex-row flex-wrap ">
          <TimeCard
            startTime={convertTimeSpan(schedule.startTime)}
            endTime={convertTimeSpan(schedule.endTime)}
            scheduleId={schedule.id}
          />
        </View>
      </View>
    </View>
  );
}
