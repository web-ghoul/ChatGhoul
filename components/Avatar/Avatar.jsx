import { Feather } from "@expo/vector-icons";
import React, { useContext } from "react";
import {
  Image,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { AuthContext } from "../../contexts/AuthContext";
import useImageHandler from "../../hooks/useImageHandler";
import Loading from "../Loading/Loading";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { ModalsContext } from "../../contexts/ModalsContext";

const Avatar = () => {
  const { setLoading, handleAuth, user } = useContext(AuthContext);
  const { handleOpenAvatarModal } = useContext(ModalsContext);
  const { handlePickImage, handleUploadImage } = useImageHandler();

  return (
    <View className={`relative items-center`}>
      <TouchableWithoutFeedback
        onPress={async () => {
          try {
            setLoading(true);
            const imagePath = await handlePickImage();
            handleUploadImage(imagePath);
            handleAuth();
            setLoading(false);
          } catch (error) {
            console.log(error);
            setLoading(false);
          }
          setLoading(false);
        }}
      >
        <View
          className={`justify-center rounded-full bg-primary border-2 border-gray-700`}
          style={{ width: wp(50), height: wp(50) }}
        >
          <Image
            className={`w-full h-full rounded-full`}
            source={
              user && user.avatar
                ? { uri: user.avatar }
                : user.gender === "male"
                ? require(`../../assets/images/male.png`)
                : require(`../../assets/images/female.png`)
            }
          />
          <TouchableOpacity
            onPress={handleOpenAvatarModal}
            className={`absolute bg-primary border border-gray-700 rounded-full bottom-0 right-0 `}
            style={{ padding: wp(4) }}
          >
            <Feather name="camera" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Avatar;
