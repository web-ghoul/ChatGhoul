import React from "react";
import { Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const SpecialTitle = ({ title, size }) => {
  return (
    <View className={`relative justify-start items-center`}>
      <Text
        className={`text-white font-[800]`}
        style={{ fontSize: wp(size || 6) }}
      >
        {title}
      </Text>
      <View
        className={`bg-light w-[75%] absolute z-[-1] bottom-1 rounded-full left-0`}
        style={{ height: hp(1) }}
      />
    </View>
  );
};

export default SpecialTitle;
