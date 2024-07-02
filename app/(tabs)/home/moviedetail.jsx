import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import ButtonCustom from "../../components/ButtonCustom";
import Director from "../../components/Director";
import Comment from "../../components/Comment";

export default function MovieDetail() {
  return (
    <ScrollView className="h-full w-full bg-primary pb-[140px]">
      <Image
        className="h-[240px] w-full"
        source={require("../../../assets/Images/Slider1.png")}
      />
      <View className="px-4 mt-4">
        <View>
          <Text className="text-primary font-bold text-[24px]">
            Avengers: Infinity War
          </Text>
          <Text className="text-subtext opacity-75 font-normal italic text-[16px]">
            Chưa biết chừng
          </Text>
          <Text className="text-subtext text-[16px] mt-[12px]">
            2h29m • 16.12.2022
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
              Movie genre:
            </Text>
            <Text className="text-[16px] text-primary font-bold flex-1 block flex-wrap">
              Action, adventure, sci-fi
            </Text>
          </View>
          <View className="flex-row items-center my-4">
            <Text className="text-[16px] text-subtext w-[128px]">
              Movie genre:
            </Text>
            <Text className="text-[16px] text-primary font-bold flex-1 block flex-wrap">
              Action, adventure, sci-fi
            </Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-[16px] text-subtext w-[128px]">
              Movie genre:
            </Text>
            <Text className="text-[16px] text-primary font-bold flex-1 block flex-wrap">
              Action, adventure, sci-fi
            </Text>
          </View>
        </View>
        <View className="mt-8 ">
          <Text className="text-[24px] font-bold text-primary mb-6">
            Storyline
          </Text>
          <Text className=" text-primary text-[16px] ">
            As the Avengers and their allies have continued to protect the world
            from threats too large for any one hero to handle, a new danger has
            emerged from the cosmic shadows: Thanos....
          </Text>
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
          <Director />
          <Director />
          <Director />
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
