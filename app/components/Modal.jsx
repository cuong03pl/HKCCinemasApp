import { View, Text } from "react-native";
import React from "react";
import Modal from "react-native-modal";

export default function WrapperComponent({ children, isVisible, onClose }) {
  return (
    <View>
      <Modal onBackdropPress={onClose} isVisible={isVisible}>
        <View className="flex-1 justify-center items-center">{children}</View>
      </Modal>
    </View>
  );
}
