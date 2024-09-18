import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Loading from "../Loading/Loading";

const SubmitButton = ({ handleSubmit, loading, title }) => {
  return loading ? (
    <Loading />
  ) : (
    <TouchableOpacity
      onPress={handleSubmit}
      className={`bg-light rounded-md py-2`}
      style={{
        height: hp(5.5),
      }}
    >
      <Text
        className={`text-white font-[800] text-center`}
        style={{ fontSize: hp(2.2) }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
