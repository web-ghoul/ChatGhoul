import React, { useContext } from "react";
import { ModalsContext } from "../contexts/ModalsContext";
import { KeyboardAvoidingView, Modal, Platform } from "react-native";
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ViewImage from "../components/ViewImage/ViewImage";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ShowImageModal = () => {
  const { openShowImageModal } = useContext(ModalsContext);

  return (
    <Modal transparent={true} visible={openShowImageModal} animationType="fade">
      <KeyboardAvoidingView
        className={`absolute bg-black rounded-lg w-full bottom-0 left-0`}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ gap: hp(3), height: heightPercentageToDP(100) }}
      >
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ViewImage />
        </GestureHandlerRootView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ShowImageModal;
