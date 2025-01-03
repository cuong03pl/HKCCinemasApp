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
import Octicons from "@expo/vector-icons/Octicons";

export default function signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [isHiddenPass, setIsHiddenPass] = useState(true);
  const [isHiddenConfirm, setIsHiddenPassConfirm] = useState(true);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
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
        setIsLoginSuccess(true);
      }
    } catch (error) {
      console.log(error);

      setIsVisible(true);
      setMessage("Vui lòng nhập đúng thông tin");
    }
  };
  const handleCloseModal = () => {
    setIsVisible(false);
    if (isLoginSuccess) router.push("/signin");
  };
  const handleTogglePassword = () => {
    setIsHiddenPass(() => (isHiddenPass == true ? false : true));
  };
  const handleToggleConfirm = () => {
    setIsHiddenPassConfirm(() => (isHiddenConfirm == true ? false : true));
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
                  <View className="mb-4">
                    <Text className="text-subtext text-[16px] font-medium my-2">
                      Email
                    </Text>
                    <TextInput
                      onChangeText={(email) => setEmail(email)}
                      placeholder="Nhập email"
                      placeholderTextColor="#7B7B8B"
                      className="bg-[#1E1E2D] w-full p-[16px] rounded-lg font-semibold text-[#fff]"
                      autoComplete="false"
                    />
                  </View>
                  <View className="mb-4">
                    <Text className="text-subtext text-[16px] font-medium my-2">
                      Username
                    </Text>
                    <TextInput
                      onChangeText={(username) => setUsername(username)}
                      placeholder="Nhập tên tài khoản"
                      placeholderTextColor="#7B7B8B"
                      className="bg-[#1E1E2D] p-[16px] rounded-lg font-semibold  text-[#fff]"
                      autoComplete="false"
                    />
                    <Text className="text-gray-500 text-[14px] mt-2 italic">
                      Username chỉ chứa chữ và số
                    </Text>
                  </View>
                  <View className="mb-4">
                    <Text className="text-subtext text-[16px] font-medium my-2">
                      Password
                    </Text>
                    <View className="flex-row bg-[#1E1E2D] p-[16px] rounded-lg w-full items-center">
                      <TextInput
                        secureTextEntry={isHiddenPass}
                        onChangeText={(password) => setPassword(password)}
                        placeholder="Nhập mật khẩu"
                        placeholderTextColor="#7B7B8B"
                        className="flex-1 font-semibold text-[16px] text-[#fff] mr-2"
                        autoComplete="false"
                      />
                      {!isHiddenPass ? (
                        <Octicons
                          onPress={handleTogglePassword}
                          name="eye"
                          size={24}
                          color="white"
                        />
                      ) : (
                        <Octicons
                          onPress={handleTogglePassword}
                          className="hidden"
                          name="eye-closed"
                          size={24}
                          color="white"
                        />
                      )}
                    </View>
                    <Text className="text-gray-500 text-[14px] mt-2 italic">
                      Mật khẩu phải chứa ít nhất một chữ cái, một số và một ký
                      tự đặc biệt.
                    </Text>
                  </View>
                  <View className="mb-4">
                    <Text className="text-subtext text-[16px] font-medium my-2">
                      Confirm Password
                    </Text>
                    <View className="flex-row bg-[#1E1E2D] p-[16px] rounded-lg w-full items-center">
                      <TextInput
                        secureTextEntry={isHiddenConfirm}
                        onChangeText={(confirmPassword) =>
                          setConfirmPassword(confirmPassword)
                        }
                        placeholder="Nhập lại mật khẩu"
                        placeholderTextColor="#7B7B8B"
                        className="flex-1 font-semibold text-[16px] text-[#fff] mr-2"
                        autoComplete="false"
                      />
                      {!isHiddenConfirm ? (
                        <Octicons
                          onPress={handleToggleConfirm}
                          name="eye"
                          size={24}
                          color="white"
                        />
                      ) : (
                        <Octicons
                          onPress={handleToggleConfirm}
                          className="hidden"
                          name="eye-closed"
                          size={24}
                          color="white"
                        />
                      )}
                    </View>
                    <Text className="text-gray-500 text-[14px] mt-2 italic">
                      Mật khẩu phải chứa ít nhất một chữ cái, một số và một ký
                      tự đặc biệt.
                    </Text>
                  </View>
                  <View className="w-full ">
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
        <Text className=" text-[16px] text-black font-medium">{message}</Text>
      </WrapperComponent>
    </Fragment>
  );
}
