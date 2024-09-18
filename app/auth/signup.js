import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import CustomKeyboardView from "../../components/CustomKeyboardView/CustomKeyboardView";
import Logo from "../../components/Logo/Logo";
import Forms from "../../forms/Forms";

export default function SignUp() {
  return (
    <CustomKeyboardView>
      <View className={`flex-1 bg-primary`}>
        <View className={`flex-1`} style={{ paddingTop: hp(8), gap: hp(6) }}>
          <Logo />
          <View
            className={`flex-row items-center justify-center`}
            style={{ gap: wp(3) }}
          >
            <Text
              className={"font-[700] text-white"}
              style={{ fontSize: hp(4) }}
            >
              Create
            </Text>
            <Text
              className={"font-[700] text-light"}
              style={{ fontSize: hp(4) }}
            >
              Account
            </Text>
          </View>
          <Forms type={"register"} />
        </View>
        <StatusBar style={"light"} />
      </View>
    </CustomKeyboardView>
  );
}
