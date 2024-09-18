import React, { useContext } from "react";
import { ModalsContext } from "../contexts/ModalsContext";
import ChooseFile from "../components/ChooseFile/ChooseFile";
import {
  Animated,
  KeyboardAvoidingView,
  Modal,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import PickUpPhoto from "../components/PickUpPhoto/PickUpPhoto";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const CameraModal = () => {
  const { openCameraModal, handleCloseCameraModal } = useContext(ModalsContext);

  return (
    <Modal transparent={true} visible={openCameraModal} animationType="fade">
      <TouchableWithoutFeedback onPress={handleCloseCameraModal}>
        <View
          className={`flex-1 `}
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        />
      </TouchableWithoutFeedback>
      <KeyboardAvoidingView
        className={`absolute rounded-lg w-full bottom-0 left-0 h-full`}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ gap: hp(3) }}
      >
        <GestureHandlerRootView style={{ flex: 1 }}>
          <PickUpPhoto />
        </GestureHandlerRootView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default CameraModal;
