import AnimatedLottieView from "lottie-react-native";
import { Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Logo = () => {
  return (
    <View className={"items-center relative"}>
      <View
        className={`justify-center items-center `}
        style={{
          height: hp(10),
        }}
      >
        <AnimatedLottieView
          source={require("../../assets/lotties/logo.json")}
          style={{
            width: wp(60),
            height: wp(60),
            position: "absolute",
          }}
          autoPlay
          loop
        />
      </View>
      <Text
        className={`font-[900] text-white absolute`}
        style={{ top: hp(11), fontSize: wp(4) }}
      >
        ChatGhoul
      </Text>
    </View>
  );
};

export default Logo;
