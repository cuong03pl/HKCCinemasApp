import { View, Text, TextInput } from "react-native";
import React from "react";
import ButtonCustom from "./ButtonCustom";
import CommentItem from "./CommentItem";

export default function Comment() {
  return (
    <View className="px-4 mb-10">
      <View className="flex-row items-center justify-between bg-search h-[64px] rounded-xl px-2 py-1">
        <TextInput
          placeholderTextColor={"#BFBFBF"}
          placeholder="Bình luận"
          className="text-[16px] text-primary flex-1 pr-2"
        />
        <ButtonCustom
          title={"Gửi"}
          classText={"text-primary text-[16px]"}
          classWind={"p-4 bg-btnSignIn rounded-xl"}
        />
      </View>
      <View>
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </View>
    </View>
  );
}
