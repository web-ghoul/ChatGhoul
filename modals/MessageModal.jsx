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
import Forms from "../forms/Forms";
import { AppContext } from "../contexts/AppContext";
import Message from "../components/Message/Message";

const MessageModal = () => {
  const { openMessageModal, handleCloseMessageModal } =
    useContext(ModalsContext);
  const { editableMessage } = useContext(AppContext);

  return (
    <Modal transparent={true} visible={openMessageModal} animationType="fade">
      <TouchableWithoutFeedback onPress={handleCloseMessageModal}>
        <View
          className={`flex-1 `}
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        />
      </TouchableWithoutFeedback>

      <KeyboardAvoidingView
        className={`absolute rounded-lg w-full bottom-0 left-0`}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ gap: hp(3) }}
      >
        <Message message={editableMessage} index={1} />
        <Forms type={"editMessage"} />
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default MessageModal;
