import React from "react";
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

const ChangeFile = () => {
  const { handlePickDocument } = useUploadFiles();
  const { handlePickImage } = useImageHandler();

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
        press={handlePickDocument}
        icon={
          <Ionicons name="document-text-outline" size={24} color="#12b0be" />
        }
      />
      <ChooseFileHelperButton
        title={"Camera"}
        press={() => {}}
        icon={<Feather name="camera" size={24} color="#12b0be" />}
      />
      <ChooseFileHelperButton
        title={"Gallery"}
        press={handlePickImage}
        icon={<FontAwesome name="photo" size={24} color="#12b0be" />}
      />
    </View>
  );
};

export default ChangeFile;
