import React, { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AppContext } from "../../contexts/AppContext";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { ModalsContext } from "../../contexts/ModalsContext";
import { globalStyles } from "../../styles/globalStyles";
import useImageHandler from "../../hooks/useImageHandler";

const UploadAvatar = () => {
  const { photoPath } = useContext(AppContext);
  const { handleCloseUploadAvatarModal } = useContext(ModalsContext);
  const { handleUploadAvatar } = useImageHandler();

  return (
    <View className={`flex-1 justify-center items-stretch`}>
      <Image
        source={
          photoPath
            ? { uri: photoPath.uri }
            : require("../../assets/images/logo.gif")
        }
        resizeMode="contain"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <View
        className={`flex-1 justify-between items-stretch absolute bottom-0 left-0 w-full z-[1000] flex-row`}
        style={[globalStyles.container, { paddingVertical: hp(4) }]}
      >
        <TouchableOpacity
          onPress={handleCloseUploadAvatarModal}
          className={`justify-start items-center flex-row`}
          style={{ gap: wp(2) }}
        >
          <Text
            className={`text-white font-[700]`}
            style={{
              fontSize: wp(5),
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleUploadAvatar(photoPath.uri);
          }}
          className={`justify-start items-center flex-row`}
          style={{ gap: wp(2) }}
        >
          <Text
            className={`text-white font-[700]`}
            style={{
              fontSize: wp(5),
            }}
          >
            Upload
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadAvatar;
