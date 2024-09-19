import React, { useContext } from "react";
import { ModalsContext } from "../contexts/ModalsContext";
import ChooseAvatar from "../components/ChooseAvatar/ChooseAvatar";
import {
  Animated,
  KeyboardAvoidingView,
  Modal,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import UploadAvatar from "../components/UploadAvatar/UploadAvatar";

const UploadAvatarModal = () => {
  const { openUploadAvatarModal, handleCloseUploadAvatarModal } =
    useContext(ModalsContext);

  return (
    <Modal
      transparent={true}
      visible={openUploadAvatarModal}
      animationType="fade"
    >
      <TouchableWithoutFeedback onPress={handleCloseUploadAvatarModal}>
        <View
          className={`flex-1 `}
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        />
      </TouchableWithoutFeedback>
      <KeyboardAvoidingView
        className={`absolute bg-black rounded-lg w-full bottom-0 left-0`}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ gap: hp(3), height: heightPercentageToDP(100) }}
      >
        <UploadAvatar />
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default UploadAvatarModal;
