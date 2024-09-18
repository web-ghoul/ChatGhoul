import AnimatedLottieView from "lottie-react-native";
import React from "react";
import { View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Loading = ({ size }) => {
  return (
    <View
      className={`justify-center items-center `}
      style={{
        height: hp(4),
      }}
    >
      <AnimatedLottieView
        source={require("../../assets/lotties/loading2.json")}
        style={{
          width: wp(size || 18),
          height: wp(size || 18),
          position: "absolute",
        }}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loading;
