import { View, Text, ScrollView, TouchableHighlight } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import DateCard from "../../components/DateCard";
import Header from "../../components/Header";
import MovieCard from "../../components/MovieCard";
import { useLocalSearchParams } from "expo-router";
import {
  GetAllScheduleByShowDateAndCinemas,
  GetAllShowDateByCinemasId,
} from "../../Services/ServiceAPI";

export default function cinemasdetails() {
  const { id } = useLocalSearchParams();
  const [showDates, setShowDates] = useState([]);
  const [currentDateId, setCurrentDateId] = useState();
  const [currentDate, setCurrentDate] = useState();
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      try {
        const response = await GetAllShowDateByCinemasId(id);

        setShowDates(response.data);
        setCurrentDateId(response.data[0].id);
        setCurrentDate(response.data[0].date);
      } catch (error) {
        console.error("Lỗi Axios:", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const response = await GetAllShowDateByCinemasId(id);
        setShowDates(response.data);
      } catch (error) {
        console.error("Lỗi Axios:", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (!currentDate) return;

    const fetchData = async () => {
      try {
        const response = await GetAllScheduleByShowDateAndCinemas(
          id,
          currentDate?.split("T")[0]
        );

        setFilms(response.data);
      } catch (error) {
        console.error("Lỗi Axios:", error);
      }
    };
    fetchData();
  }, [currentDate]);
  const handleChangeDate = (date) => {
    setCurrentDateId(date.id);
    setCurrentDate(date?.date);
  };
  return (
    <View className="bg-primary h-full w-full px-[16px]  flex-1">
      <StatusBar style="auto" />
      <SafeAreaView className=" ">
        <Header title={"Chọn suất chiếu"} />
        <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
          <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizontal: 16 }}
            className="mt-6"
          >
            {showDates?.map((date, index) => {
              return (
                <TouchableHighlight
                  key={index}
                  onPress={() => handleChangeDate(date)}
                >
                  <DateCard date={date} isDate={date.id === currentDateId} />
                </TouchableHighlight>
              );
            })}
          </ScrollView>
          <View className="px-4 mt-4">
            <View className=" bg-[#2E2E2E] rounded-xl">
              {films?.map((film, index) => {
                return <MovieCard schedule={film} key={index} />;
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
