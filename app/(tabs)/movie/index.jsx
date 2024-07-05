import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonCustom from "../../components/ButtonCustom";
import MovieItem from "../../components/MovieItem";
export default function movie() {
  const [toggleButton, setToggleButton] = useState("Now-playing");
  const handleButtonClick = (buttonName) => {
    setToggleButton(buttonName);
  };
  return (
    <View className="bg-primary h-full w-full  px-[16px]">
      <StatusBar style="auto" />
      <SafeAreaView className=" pt-8">
        <View>
          <View className="pb-2">
            <View className="flex bg-search h-[56px] flex-row items-center px-1 rounded-xl">
              <ButtonCustom
                title={"Now playing"}
                classWind={
                  (toggleButton == "Now-playing" ? "bg-btnSignIn " : "") +
                  "h-[48px] flex justify-center items-center w-[50%] rounded-[8px]"
                }
                classText={
                  (toggleButton == "Now-playing"
                    ? "text-[#000]  "
                    : "text-subtext ") + "font-bold text-[18px]"
                }
                handlePress={() => handleButtonClick("Now-playing")}
              />
              <ButtonCustom
                title={"Coming-soon"}
                classWind={
                  (toggleButton == "Coming-soon" ? "bg-btnSignIn " : "") +
                  " h-[48px] flex justify-center items-center w-[50%] rounded-[8px]"
                }
                classText={
                  (toggleButton == "Coming-soon"
                    ? "text-[#000]  "
                    : "text-subtext ") + " font-bold text-[18px]"
                }
                handlePress={() => handleButtonClick("Coming-soon")}
              />
            </View>
          </View>
          <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
            <View className="flex-row flex-wrap justify-between mt-8 ">
              <MovieItem />
              <MovieItem />
              <MovieItem />
              <MovieItem />
              <MovieItem />
              <MovieItem />
              <MovieItem />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}
