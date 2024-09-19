import React, { useContext } from "react";
import { ModalsContext } from "../contexts/ModalsContext";
import ChooseAvatar from "../components/ChooseAvatar/ChooseAvatar";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const AvatarModal = () => {
  const { openAvatarModal, handleCloseAvatarModal } = useContext(ModalsContext);

  return (
    <Modal transparent={true} visible={openAvatarModal} animationType="fade">
      <TouchableWithoutFeedback onPress={handleCloseAvatarModal}>
        <View
          className={`flex-1 `}
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        />
      </TouchableWithoutFeedback>
      <KeyboardAvoidingView
        className={`absolute bg-primary rounded-lg p-4 w-full bottom-0 left-0`}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ gap: hp(3) }}
      >
        <ChooseAvatar />
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AvatarModal;
