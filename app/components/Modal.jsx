import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Modal from "react-native-modal";

export default function WrapperComponent({ children, isVisible, onClose }) {
  return (
    <View>
      <Modal onBackdropPress={onClose} isVisible={isVisible}>
        <View className="flex-1 justify-center items-center">
          <View className=" relative flex-1 items-center justify-center bg-[#ccc] max-h-[100px] w-[300px] rounded-lg">
            {children}
            <TouchableOpacity
              className="absolute bottom-3 right-5 mt-5"
              onPress={onClose}
            >
              <Text className="text-[#000]">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
