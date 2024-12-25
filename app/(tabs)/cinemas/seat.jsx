import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Col, Grid } from "react-native-easy-grid";
import ButtonCustom from "../../components/ButtonCustom";
import { useLocalSearchParams } from "expo-router";
import {
  GetScheduleById,
  GetSeatByRoomId,
  GetTicketByScheduleId,
  isAvailable,
} from "../../Services/ServiceAPI";
import {
  convertTimeSpan,
  convertVND,
  getDayOfWeek,
} from "../../utils/function";
import { convertTime } from "../../utils/convertTime";
export default function seat() {
  const { id } = useLocalSearchParams();
  const [ticket, setTicket] = useState({});
  const [schedule, setSchedule] = useState({});
  const [seats, setSeats] = useState([]);
  const [selectSeats, setSelectSeats] = useState([]);
  const [status, setStatus] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetTicketByScheduleId(id);
        setTicket(response.data);
      } catch (error) {
        console.error("Lỗi Axios:", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetScheduleById(id);

        setSchedule(response.data);
      } catch (error) {
        console.error("Lỗi Axios:", error);
      }
    };
    fetchData();
  }, [id]);
  useEffect(() => {
    if (!schedule?.room?.id) return;
    const fetchData = async () => {
      try {
        const response = await GetSeatByRoomId(schedule?.room?.id);
        setSeats(response.data);
      } catch (error) {
        console.error("Lỗi Axios:", error);
      }
    };
    fetchData();
  }, [id, schedule]);
  const handleListSeat = (isSelectId) => {
    !selectSeats.includes(isSelectId)
      ? setSelectSeats((prev) => [...prev, isSelectId])
      : setSelectSeats(selectSeats.filter((seatId) => seatId != isSelectId));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          seats?.map(async (seat) => {
            return isAvailable(seat.id, id);
          })
        );

        const status = {};
        responses.forEach((res, index) => {
          status[seats[index].id] = res.data;
        });
        setStatus(status);
      } catch (error) {
        console.error("Lỗi Axios:", error);
      }
    };
    fetchData();
  }, [seats]);
  return (
    <View className="bg-primary h-full w-full flex-1">
      <StatusBar style="auto" />
      <SafeAreaView className=" ">
        <Header />
        <View className="flex-col justify-between h-full ">
          <View className="px-[16px]">
            <View className="flex flex-col justify-center items-center py-8 ">
              <View className="flex flex-col mb-8">
                <View className="w-[256px] h-[4px] bg-white"></View>
                <Text className="text-center text-white mt-2">Màn hình</Text>
              </View>
              <View className=" flex-row flex-wrap justify-center gap-1   ">
                {seats.map((seat, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleListSeat(seat.id)}
                    >
                      <View
                        className={` ${
                          !status[seat.id] ? "bg-[#722ed1]" : "bg-[#404040]"
                        }  w-[40px] h-[40px] text-white rounded-lg flex items-center justify-center ${
                          selectSeats.includes(seat?.id) && "opacity-50"
                        }`}
                      >
                        <Text className="text-primary">{seat.name}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <View className="flex-row gap-6 mt-4">
                <View className="flex items-center gap-2">
                  <View className="bg-[#404040] w-[40px] h-[40px] rounded-md"></View>
                  <Text className="text-white">Đã đặt</Text>
                </View>
                <View className="flex items-center gap-2">
                  <View className="bg-[#722ed1] w-[40px] h-[40px] rounded-md"></View>
                  <Text className="text-white">Ghế thường</Text>
                </View>
                <View className="flex items-center gap-2">
                  <View className="bg-[#f5222d] w-[40px] h-[40px] rounded-md"></View>
                  <Text className="text-white">Ghế VIP</Text>
                </View>
              </View>
            </View>
          </View>
          <View className="flex-1 border-t border-solid border-[#ccc] max-h-[300px] px-4 py-2">
            <View>
              <Text className="text-primary text-[24px] font-bold">
                {schedule?.film?.title}
              </Text>
              <View className="mt-1">
                <Text className="text-title">
                  {convertTimeSpan(schedule?.startTime)} -
                  {convertTimeSpan(schedule?.endTime)} |
                  {getDayOfWeek(schedule?.showDate?.date)},{" "}
                  {convertTime(schedule?.showDate?.date)}
                </Text>
              </View>
              <View className="flex-row items-center justify-between mt-4">
                <Text className="text-primary">Tạm tính</Text>
                <Text className="text-primary font-semibold text-[20px]">
                  {convertVND(selectSeats.length * ticket?.price) || 0} đ
                </Text>
              </View>
              <ButtonCustom
                title="Thanh toán"
                classWind="bg-btnSignIn text-[#000] w-full flex justify-center items-center h-[48px] rounded-full mt-4"
                classText="font-bold text-[20px]"
              ></ButtonCustom>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
