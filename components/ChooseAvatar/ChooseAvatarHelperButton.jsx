import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const ChooseAvatarHelperButton = ({ press, title, icon }) => {
  return (
    <TouchableOpacity
      onPress={press}
      className={`flex-col justify-center items-center`}
      style={{ gap: hp(1) }}
    >
      <View
        className={`border border-gray-600 bg-primary justify-center items-center rounded-full`}
        style={{ width: wp(14), height: wp(14) }}
      >
        {icon}
      </View>
      <Text className={`text-white`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ChooseAvatarHelperButton;
