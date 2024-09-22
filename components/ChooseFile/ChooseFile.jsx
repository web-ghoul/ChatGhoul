import React, { useContext } from "react";
import UserModal from "../../modals/UserModal";
import { Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ChooseFileHelperButton from "./ChooseFileHelperButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import useUploadFiles from "../../hooks/useUploadFiles";
import useImageHandler from "../../hooks/useImageHandler";
import { ModalsContext } from "../../contexts/ModalsContext";
import { AppContext } from "../../contexts/AppContext";
import useMediaHandler from "../../hooks/useMediaHandler";

const ChangeFile = () => {
  const { handleChooseMedia } = useMediaHandler();
  const { handleOpenCameraModal, handleCloseFilesModal, handleOpenMediaModal } =
    useContext(ModalsContext);
  const { setMedia } = useContext(AppContext);

  const handleChooseImage = async () => {
    const path = await handleChooseMedia("image");
    setMedia(path);
    handleCloseFilesModal();
    handleOpenMediaModal();
  };

  const handleChooseFile = async () => {
    const path = await handleChooseMedia("file");
    setMedia(path);
    handleCloseFilesModal();
    handleOpenMediaModal();
  };

  return (
    <View
      className={`flex-1 flex-row justify-between items-center`}
      style={{
        gap: wp(20),
        paddingHorizontal: wp(4),
        paddingVertical: hp(4),
      }}
    >
      <ChooseFileHelperButton
        title={"Document"}
        press={handleChooseFile}
        icon={
          <Ionicons name="document-text-outline" size={24} color="#12b0be" />
        }
      />
      <ChooseFileHelperButton
        title={"Camera"}
        press={handleOpenCameraModal}
        icon={<Feather name="camera" size={24} color="#12b0be" />}
      />
      <ChooseFileHelperButton
        title={"Gallery"}
        press={handleChooseImage}
        icon={<FontAwesome name="photo" size={24} color="#12b0be" />}
      />
    </View>
  );
};

export default ChangeFile;
