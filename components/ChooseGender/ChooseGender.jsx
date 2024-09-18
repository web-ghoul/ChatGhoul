import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Radio from "../Radio/Radio";
import HelperText from "../HelperText/HelperText";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Fontisto from "@expo/vector-icons/Fontisto";

const ChooseGender = ({ formik }) => {
  const [gender, setGender] = useState(formik?.values?.gender || "");

  useEffect(() => {
    if (gender) {
      formik.values.gender = gender;
    }
  }, [gender]);

  return (
    <View className={`flex-col justify-stretch items-center flex-1`}>
      <View className={`flex-row flex-1 w-full justify-between items-center`}>
        <View
          className={`flex-row justify-start items-center`}
          style={{ gap: wp(2) }}
        >
          <Fontisto name="transgender" size={24} color="#fff" />
          <Text className={`text-white font-[800]`} style={{ fontSize: wp(4) }}>
            Gender :
          </Text>
        </View>
        <Radio
          title={"male"}
          press={() => setGender("male")}
          active={gender === "male"}
        />
        <Radio
          title={"female"}
          press={() => setGender("female")}
          active={gender === "female"}
        />
      </View>
      <View className={`flex-1 items-start w-full`}>
        {formik.touched.gender && formik.errors.gender && (
          <HelperText text={formik.errors.gender} />
        )}
      </View>
    </View>
  );
};

export default ChooseGender;
