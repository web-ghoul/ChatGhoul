import React, { useContext } from "react";
import { ModalsContext } from "../contexts/ModalsContext";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  ActivityIndicator,
  View,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const BackDropModal = () => {
  const { openBackDropModal } = useContext(ModalsContext);

  return (
    <Modal transparent={true} visible={openBackDropModal} animationType="fade">
      <View
        className={`flex-1`}
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      />
      <KeyboardAvoidingView
        className={`absolute rounded-lg w-full bottom-0 left-0 h-full justify-center items-center`}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ gap: hp(3) }}
      >
        <ActivityIndicator size={"large"} />
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default BackDropModal;
