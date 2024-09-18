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

const FilesModal = () => {
  const { openFilesModal, handleCloseFilesModal } = useContext(ModalsContext);

  return (
    <Modal transparent={true} visible={openFilesModal} animationType="fade">
      <TouchableWithoutFeedback onPress={handleCloseFilesModal}>
        <View
          className={`flex-1 `}
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        />
      </TouchableWithoutFeedback>

      <KeyboardAvoidingView
        className={`absolute bg-primary rounded-lg w-full bottom-0 left-0`}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ gap: hp(3) }}
      >
        <ChooseFile />
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default FilesModal;
