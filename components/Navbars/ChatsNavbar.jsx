import React, { useContext } from "react";
import { Platform, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AuthContext } from "../../contexts/AuthContext";
import UserMenu from "../UserMenu/UserMenu";
import AnimatedLottieView from "lottie-react-native";
import { globalStyles } from "../../styles/globalStyles";
import NavbarContainer from "./NavbarContainer";
import SpecialTitle from "../SpecialTitle/SpecialTitle";

const ios = Platform.OS === "ios";
const ChatsNavbar = () => {
  const { top } = useSafeAreaInsets();

  return (
    <NavbarContainer>
      <View
        className={`flex-row justify-start items-center relative`}
        style={{
          gap: wp(2),
        }}
      >
        <View
          className={`justify-center items-center `}
          style={{
            width: wp(8),
            height: hp(4),
          }}
        >
          <AnimatedLottieView
            source={require("../../assets/lotties/logo.json")}
            style={{
              width: wp(15),
              height: wp(15),
            }}
            autoPlay
            loop
          />
        </View>
        <SpecialTitle title={"ChatGhoul"} />
      </View>
      <UserMenu />
    </NavbarContainer>
  );
};

export default ChatsNavbar;
