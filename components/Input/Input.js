import React from "react";
import { TextInput, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import HelperText from "../HelperText/HelperText";

const Input = ({ formik, name, placeholder, icon, type }) => {
  const { touched, values, handleBlur, handleChange, errors } = formik;

  return (
    <View>
      <View
        className={`bg-white border-2 border-light rounded-md flex-row p-2 justify-between items-center`}
        style={{ gap: wp(2) }}
      >
        <View className={`flex-1 items-center`}>{icon}</View>
        <TextInput
          style={{ height: hp(4), width: wp(75) }}
          autoComplete={type === "email" ? type : ""}
          onChangeText={handleChange(name)}
          onBlur={handleBlur(name)}
          inputMode={
            type === "email" || type === "tel" || type == "search" ? type : ""
          }
          autoCapitalize="none"
          value={values[name]}
          placeholder={placeholder}
          placeholderTextColor={"gray"}
          secureTextEntry={type === "password"}
          keyboardType={type === "tel" ? "phone-pad" : "default"}
        />
      </View>
      {touched[name] && errors[name] && <HelperText text={errors[name]} />}
    </View>
  );
};

export default Input;
