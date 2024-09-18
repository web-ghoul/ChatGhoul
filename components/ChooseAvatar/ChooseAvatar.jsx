import React, { useContext } from "react";
import { Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ChooseAvatarHelperButton from "./ChooseAvatarHelperButton";
import { ModalsContext } from "../../contexts/ModalsContext";
import useImageHandler from "../../hooks/useImageHandler";

const ChooseAvatar = () => {
  const { handleOpenCameraModal, handleCloseAvatarModal } =
    useContext(ModalsContext);
  const { handlePickImage } = useImageHandler();

  return (
    <View
      className={`flex-1 justify-stretch items-center flex-col`}
      style={{ gap: hp(3) }}
    >
      <Text className={`text-white font-[700]`} style={{ fontSize: wp(6) }}>
        Change Avatar
      </Text>
      <View
        className={`flex-row justify-between items-center`}
        style={{ gap: wp(20) }}
      >
        <ChooseAvatarHelperButton
          title={"Camera"}
          press={() => {
            handleOpenCameraModal();
            handleCloseAvatarModal();
          }}
          icon={<Feather name="camera" size={24} color="#12b0be" />}
        />
        <ChooseAvatarHelperButton
          title={"Gallery"}
          press={() => {
            handlePickImage();
            handleCloseAvatarModal();
          }}
          icon={<FontAwesome name="photo" size={24} color="#12b0be" />}
        />
      </View>
    </View>
  );
};

export default ChooseAvatar;
