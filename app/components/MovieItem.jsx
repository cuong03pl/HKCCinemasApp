import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { convertTime } from "../utils/convertTime";
import { GetAllCategoriesByFilmId } from "../Services/ServiceAPI";
import { Link } from "expo-router";

export default function MovieItem({ data, isUpcoming }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetAllCategoriesByFilmId(data?.id);

        setCategories(response.data);
      } catch (error) {
        console.error("Lỗi Axios:", error);
      }
    };
    fetchData();
  }, [data]);

  return (
    <View className="flex-col items-center max-w-[172px] mb-4">
      <Image
        className="w-[172px] h-[250px] rounded-xl"
        src={`https://hkccinemas.azurewebsites.net/${data?.image}`}
      ></Image>
      <View className="flex-col mt-4">
        <Link
          numberOfLines={1}
          href={{
            pathname: "/home/moviedetail",
            params: { id: data.id },
          }}
          className="text-[16px] line-clamp-2 font-bold text-title"
        >
          {data.title}
        </Link>
        <View className="mt-3 ">
          <View className="flex-row gap-2 items-center">
            <AntDesign name="videocamera" size={16} color="#F2F2F2" />
            <View className="flex-1 flex-row">
              {categories.map((item, index) => {
                return (
                  <Text key={index} className="text-primary">
                    {`${item.name}${index < categories.length - 1 ? ", " : ""}`}
                  </Text>
                );
              })}
            </View>
          </View>
          {isUpcoming ? (
            <View className="flex-row gap-2">
              <AntDesign name="calendar" size={16} color="#F2F2F2" />
              <Text className="text-primary">
                {convertTime(data?.releaseDate)}
              </Text>
            </View>
          ) : (
            ""
          )}
        </View>
      </View>
    </View>
  );
}
