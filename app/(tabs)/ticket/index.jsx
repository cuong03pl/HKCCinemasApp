import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import TicketItem from "../../components/TicketItem";
import { getMyTickets } from "../../Services/ServiceAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Empty from "../../components/Empty";

export default function ticket() {
  const [tickets, setTickets] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = JSON.parse(await AsyncStorage.getItem("user"));
        setUser(user.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMyTickets(user?.id);
        setTickets(response.data);
      } catch (error) {
        console.error("Lỗi Axios:", error);
      }
    };
    fetchData();
  }, [user]);
  return (
    <View className="bg-black h-full w-full px-4 pb-[70px]">
      <StatusBar style="auto" />
      <SafeAreaView>
        <View className="mb-4 mt-4">
          <Text className="text-center text-primary text-[28px] font-bold">
            My ticket
          </Text>
        </View>
        {tickets ? (
          <ScrollView>
            <View className="mt-8">
              {tickets.map((ticket, index) => {
                return <TicketItem ticket={ticket} key={index} />;
              })}
            </View>
          </ScrollView>
        ) : (
          <View>
            <Empty />
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}
