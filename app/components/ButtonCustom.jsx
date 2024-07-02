import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function ButtonCustom({
  handlePress,
  title,
  classWind,
  classText,
  ...props
}) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={classWind}
      activeOpacity={0.7}
      {...props}
    >
      <Text className={classText}>{title}</Text>
    </TouchableOpacity>
  );
}
