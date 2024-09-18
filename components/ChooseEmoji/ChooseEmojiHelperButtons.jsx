import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const DeleteButton = ({ press }) => {
  return (
    <TouchableOpacity
      onPress={press}
      className={`justify-center items-center rounded-full`}
      style={{
        width: wp(12),
        height: wp(12),
      }}
    >
      <Feather name="delete" size={22} color="#fff" />
    </TouchableOpacity>
  );
};

export default DeleteButton;
