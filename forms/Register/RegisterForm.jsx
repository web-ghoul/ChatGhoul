import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import HelperText from "../../components/HelperText/HelperText";
import Input from "../../components/Input/Input";
import Loading from "../../components/Loading/Loading";
import Radio from "../../components/Radio/Radio";
import { AuthContext } from "../../contexts/AuthContext";
import ChooseGender from "../../components/ChooseGender/ChooseGender";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

const RegisterForm = ({ formik }) => {
  const { handleSubmit } = formik;
  const { loading } = useContext(AuthContext);

  return (
    <View
      className={`flex-1 justify-center rounded-t-3xl`}
      style={{ gap: hp(4), paddingHorizontal: wp(5) }}
    >
      <Input
        name={"email"}
        placeholder={"Enter Email"}
        formik={formik}
        icon={<Feather name="mail" size={24} color="black" />}
      />
      <Input
        name={"username"}
        placeholder={"Enter Username"}
        formik={formik}
        icon={<Feather name="user" size={24} color="black" />}
      />
      <Input
        name={"phone"}
        placeholder={"Enter Phone Number"}
        formik={formik}
        type={"tel"}
        icon={<Feather name="smartphone" size={24} color="black" />}
      />
      <ChooseGender formik={formik} />
      <Input
        name={"password"}
        placeholder={"Enter Password"}
        formik={formik}
        type={"password"}
        icon={<Feather name="lock" size={24} color="black" />}
      />
      <SubmitButton
        handleSubmit={handleSubmit}
        loading={loading}
        title={"Register"}
      />
      <View className={`justify-center flex-row`} style={{ gap: wp(2) }}>
        <Text className={`text-white`}>Already have an account ?</Text>
        <Link
          href={"/auth/signin"}
          className={`text-light font-[700] underline`}
        >
          Sign In
        </Link>
      </View>
    </View>
  );
};

export default RegisterForm;
