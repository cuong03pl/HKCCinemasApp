import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Search from "../../components/Search";
import NowPlaying from "../../components/NowPlaying";
import ComingSoon from "../../components/ComingSoon";
import { GetNowShowingFilms } from "../../Services/ServiceAPI";
import axios from "axios";
export default function home() {
  const [nowPlaying, setNowPlaying] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetNowShowingFilms();
        setNowPlaying(response.data);
      } catch (error) {
        console.error("Lỗi Axios:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <View className="bg-primary h-full w-full pb-[70px]">
      <StatusBar style="auto" />
      <SafeAreaView className=" pt-8">
        <View className="px-4 pb-4">
          <Search placeholder={"Tìm kiếm"} />
        </View>
        <ScrollView>
          <View>
            <NowPlaying data={nowPlaying} />
          </View>
          <View>
            <ComingSoon
              params="getUpcomingFilms"
              isUpcoming
              title="Phim sắp chiếu"
            />
          </View>
          <View>
            <ComingSoon params="getTop5" title="Top 5 phim hay" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
