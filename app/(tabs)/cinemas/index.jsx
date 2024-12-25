import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "../../components/Search";
import CinemasItem from "../../components/CinemasItem";
import CinemasDetail from "../../components/CinemasDetail";
import {
  getAllCinemasCategories,
  GetCinemasByCategoryId,
  GetCinemasCategoryById,
} from "../../Services/ServiceAPI";
export default function cinemas() {
  const [cinemasCategories, setCinemasCategories] = useState([]);
  const [cinemasCategory, setCinemasCategory] = useState({});
  const [cinemasCategoryId, setCinemasCategoryId] = useState("");
  const [cinemas, setCinemas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCinemasCategories();
        setCinemasCategories(response.data);

        setCinemasCategoryId(response.data[0].id);
      } catch (error) {
        console.error("Lỗi Axios:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (!cinemasCategoryId) return;
    const fetchData = async () => {
      try {
        const response = await GetCinemasByCategoryId(cinemasCategoryId);

        setCinemas(response.data);
      } catch (error) {
        console.error("Lỗi Axios:", error);
      }
    };
    fetchData();
  }, [cinemasCategoryId]);
  useEffect(() => {
    if (!cinemasCategoryId) return;
    const fetchData = async () => {
      try {
        const response = await GetCinemasCategoryById(cinemasCategoryId);
        setCinemasCategory(response.data);
      } catch (error) {
        console.error("Lỗi Axios:", error);
      }
    };
    fetchData();
  }, [cinemasCategoryId]);

  return (
    <View className="bg-primary h-full w-full px-[16px]">
      <StatusBar style="auto" />
      <SafeAreaView className=" ">
        <View className="mb-4 ">
          <Text className="text-center text-primary text-[28px] font-bold">
            Chọn rạp chiếu
          </Text>
        </View>
        <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
          {/* search */}
          <View>
            <Search placeholder={"Tìm rạp phim"} />
          </View>
          {/* danh sach rap */}
          <View className="mt-6 pt-4 pb-2 bg-[#2a2a2a95] rounded-lg">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 15,
              }}
              className="flex-row "
            >
              {cinemasCategories?.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setCinemasCategoryId(item.id)}
                  >
                    <CinemasItem
                      item={item}
                      isSelected={item?.id == cinemasCategoryId}
                    />
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          {/* danh sach cac rap con */}

          <View className="mt-5">
            <View>
              <Text className="text-primary font-bold text-[24px] mb-2">
                {cinemasCategory?.name}
              </Text>
            </View>
            <View>
              {cinemas?.map((item, index) => {
                return <CinemasDetail cinemas={item} key={index} />;
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
