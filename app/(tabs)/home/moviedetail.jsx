import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import ButtonCustom from "../../components/ButtonCustom";
import Director from "../../components/Director";
import Comment from "../../components/Comment";
import { router, useLocalSearchParams } from "expo-router";
import {
  getActorByFimlId,
  GetAllCategoriesByFilmId,
  getFilmById,
} from "../../Services/ServiceAPI";
import { convertTime } from "../../utils/convertTime";
import { AntDesign } from "@expo/vector-icons";

export default function MovieDetail() {
  const { id } = useLocalSearchParams();
  const [movie, setMovie] = useState({});
  const [categories, setCategories] = useState([]);
  const [actors, setActors] = useState([]);

  // get film
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFilmById(id);
        setMovie(response.data);
      } catch (error) {
        console.error("Lỗi Axios:", error);
      }
    };
    fetchData();
  }, [id]);

  // get category
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetAllCategoriesByFilmId(id);

        setCategories(response.data);
      } catch (error) {
        console.error("Lỗi Axios:", error);
      }
    };
    fetchData();
  }, [id]);

  // get actor
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getActorByFimlId(id);

        setActors(response.data);
      } catch (error) {
        console.error("Lỗi Axios:", error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <ScrollView className="h-full w-full bg-primary pb-[140px]">
      <Image
        className="h-[240px] w-full"
        src={`https://hkccinemas.azurewebsites.net/${movie?.background}`}
      />
      <View className="px-4 mt-4">
        <View>
          <Text className="text-primary font-bold text-[24px]">
            {movie?.title}
          </Text>
          <Text className="text-subtext opacity-75 font-normal italic text-[16px]">
            {movie?.synopsis}
          </Text>
          <Text className="text-subtext text-[16px] mt-[12px]">
            {movie?.duration}m • {convertTime(movie?.releaseDate)}
          </Text>
          <ButtonCustom
            title="Đặt vé"
            classWind="bg-btnSignIn text-[#000] w-full flex justify-center items-center h-[56px] rounded-full mt-[32px]"
            classText="font-bold text-[20px]"
          ></ButtonCustom>
        </View>
        <View className="mt-8">
          <View className="flex-row items-center">
            <Text className="text-[16px] text-subtext w-[128px]">
              Thể loại:
            </Text>
            <Text className="text-[16px] text-primary font-bold flex-1 block flex-wrap">
              {categories.map((item, index) => {
                return (
                  <Text key={index} className="text-primary">
                    {`${item.name}${index < categories.length - 1 ? ", " : ""}`}
                  </Text>
                );
              })}
            </Text>
          </View>
          <View className="flex-row items-center my-4">
            <Text className="text-[16px] text-subtext w-[128px]">
              Đạo diễn:
            </Text>
            <Text className="text-[16px] text-primary font-bold flex-1 block flex-wrap">
              {movie?.director}
            </Text>
          </View>
        </View>
        <View className="mt-8 ">
          {/* <Text className="text-[24px] font-bold text-primary mb-6">
            Storyline
          </Text> */}
          <Text className=" text-primary text-[16px] ">{movie?.detail}</Text>
        </View>
      </View>
      <View className="mt-8 ">
        <Text className="text-[24px] font-bold text-primary mb-6 px-4">
          Actor
        </Text>
        <ScrollView
          horizontal
          contentContainerStyle={{ paddingHorizontal: 15 }}
          showsHorizontalScrollIndicator={false}
          className="flex-row "
        >
          {actors.map((item, index) => {
            return <Director data={item} key={index} />;
          })}
        </ScrollView>
      </View>
      <View className="mt-8 ">
        <Text className="text-[24px] font-bold text-primary mb-6 px-4">
          Trailer
        </Text>
        <ScrollView
          horizontal
          contentContainerStyle={{ paddingHorizontal: 15 }}
          showsHorizontalScrollIndicator={false}
          className="flex-row "
        >
          <Director />
          <Director />
          <Director />
        </ScrollView>
      </View>

      <View className="mt-8 ">
        <Text className="text-[24px] font-bold text-primary mb-6 px-4">
          Comment
        </Text>

        <Comment />
      </View>
    </ScrollView>
  );
}
