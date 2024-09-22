import React, { useContext } from "react";
import { ModalsContext } from "../contexts/ModalsContext";
import {
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
import Forms from "../forms/Forms";
import ViewImage from "../components/ViewImage/ViewImage";
import ViewMedia from "../components/ViewMedia/ViewMedia";

const MediaModal = () => {
  const { openMediaModal } = useContext(ModalsContext);

  return (
    <Modal transparent={true} visible={openMediaModal} animationType="fade">
      <KeyboardAvoidingView
        className={`absolute bg-black rounded-lg w-full bottom-0 left-0 flex-col justify-center items-between content-stretch`}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ gap: hp(3), height: heightPercentageToDP(100) }}
      >
        <ViewMedia />
        <View className={`absolute bottom-0 left-0 w-full`}>
          <Forms type={"sendMedia"} />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default MediaModal;
