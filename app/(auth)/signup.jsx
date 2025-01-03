import {
  View,
  Text,
  Image,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import React, { Fragment, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonCustom from "../components/ButtonCustom";
import { Link, router } from "expo-router";
import { register } from "../Services/ServiceAPI";
import WrapperComponent from "../components/Modal";

export default function signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const handleRegister = async () => {
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("username", username);
      formData.append("password", password);
      formData.append("confirmpassword", confirmPassword);

      const respone = await register(formData);
      setMessage(respone.data[0].description || respone.data);
      if (respone.data) {
        setIsVisible(true);
        router.push("/signin");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleCloseModal = () => {
    setIsVisible(false);
  };
  return (
    <Fragment>
      <KeyboardAvoidingView
        className="flex-1 h-full"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            <View className="bg-primary h-full w-full ">
              <StatusBar style="auto" />
              <SafeAreaView className="px-4 flex justify-between ">
                <View className="flex justify-center items-center">
                  <Image
                    className="w-[200px] h-[200px]"
                    source={require("../../assets/Images/LoginImage.png")}
                  ></Image>
                </View>
                <View className="pt-4">
                  <View>
                    <Text className="text-subtext text-[16px] font-medium my-2">
                      Email
                    </Text>
                    <TextInput
                      onChangeText={(email) => setEmail(email)}
                      placeholder="Nhập email"
                      placeholderTextColor="#7B7B8B"
                      className="bg-[#1E1E2D] w-full p-[16px] rounded-lg font-semibold text-[#fff]"
                    />
                  </View>

                  <View>
                    <Text className="text-subtext text-[16px] font-medium my-2">
                      Username
                    </Text>
                    <TextInput
                      onChangeText={(username) => setUsername(username)}
                      placeholder="Nhập tên tài khoản"
                      placeholderTextColor="#7B7B8B"
                      className="bg-[#1E1E2D] p-[16px] rounded-lg font-semibold  text-[#fff]"
                    />
                  </View>

                  <View>
                    <Text className="text-subtext text-[16px] font-medium my-2">
                      Password
                    </Text>
                    <TextInput
                      secureTextEntry={true}
                      onChangeText={(password) => setPassword(password)}
                      placeholder="Nhập mật khẩu"
                      placeholderTextColor="#7B7B8B"
                      className="bg-[#1E1E2D] p-[16px] rounded-lg font-semibold text-[#fff]"
                    />
                  </View>
                  <View>
                    <Text className="text-subtext text-[16px] font-medium my-2">
                      Confirm Password
                    </Text>
                    <TextInput
                      secureTextEntry={true}
                      onChangeText={(confirmPassword) =>
                        setConfirmPassword(confirmPassword)
                      }
                      placeholder="Nhập lại mật khẩu"
                      placeholderTextColor="#7B7B8B"
                      className="bg-[#1E1E2D] p-[16px] rounded-lg font-semibold text-[#fff]"
                    />
                  </View>
                  <View className="w-full mt-4">
                    <ButtonCustom
                      title="Đăng kí"
                      classWind="bg-btnSignIn text-[#000] w-full flex justify-center items-center h-[56px] rounded-full"
                      classText="font-bold text-[20px]"
                      handlePress={() => handleRegister()}
                    ></ButtonCustom>
                    <View className="flex gap-1 flex-row items-center justify-center mt-3">
                      <Text className="text-[14px] font-normal text-[#fff]">
                        Bạn đã có tài khoản?
                      </Text>
                      <Link
                        className="text-[#FF9001] ml-2 block"
                        href={"/signin"}
                      >
                        Đăng nhập
                      </Link>
                    </View>
                  </View>
                </View>
              </SafeAreaView>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <WrapperComponent onClose={handleCloseModal} isVisible={isVisible}>
        <View className="flex-1 items-center justify-center bg-[#ccc] max-h-[50px] w-[200px]">
          <Text className=" text-[16px] text-white">{message}</Text>
        </View>
      </WrapperComponent>
    </Fragment>
  );
}
