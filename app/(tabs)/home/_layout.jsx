import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="moviedetail"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="seeall"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
}
