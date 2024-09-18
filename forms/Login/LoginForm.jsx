import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Input from "../../components/Input/Input";
import Loading from "../../components/Loading/Loading";
import { AuthContext } from "../../contexts/AuthContext";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

const LoginForm = ({ formik }) => {
  const { handleSubmit } = formik;
  const { loading } = useContext(AuthContext);

  return (
    <View
      className={`flex-1 justify-center `}
      style={{ gap: hp(4), paddingHorizontal: wp(5) }}
    >
      <Input
        name={"email"}
        placeholder={"Enter Email"}
        formik={formik}
        icon={<Feather name="mail" size={24} color="black" />}
      />
      <Input
        name={"password"}
        placeholder={"Enter Password"}
        formik={formik}
        type={"password"}
        icon={<Feather name="lock" size={24} color="black" />}
      />
      <View style={{ gap: wp(2) }}>
        <Text className={`text-white text-right`}>Forgot password ?</Text>
        <SubmitButton
          handleSubmit={handleSubmit}
          loading={loading}
          title={"Login"}
        />
      </View>
      <View className={`justify-center flex-row`} style={{ gap: wp(2) }}>
        <Text className={`text-white`}>Don't have an account ?</Text>
        <Link
          href={"/auth/signup"}
          className={`text-light font-[700] underline`}
        >
          Sign Up
        </Link>
      </View>
    </View>
  );
};

export default LoginForm;
