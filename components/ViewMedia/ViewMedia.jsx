import React, { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AppContext } from "../../contexts/AppContext";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { ModalsContext } from "../../contexts/ModalsContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import { globalStyles } from "../../styles/globalStyles";
import { Zoomable } from "@likashefqet/react-native-image-zoom";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Feather from "@expo/vector-icons/Feather";
import useMediaHandler from "../../hooks/useMediaHandler";

const ViewMedia = () => {
  const { media, setMedia } = useContext(AppContext);
  const { handleCloseMediaModal } = useContext(ModalsContext);
  const { handleChooseMedia } = useMediaHandler();
  console.log(media);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className={`flex-1 justify-center items-stretch`}>
        <View
          className={`flex-1 justify-between items-center absolute top-0 left-0 w-full z-[1000] flex-row`}
          style={[globalStyles.container, { paddingVertical: hp(2) }]}
        >
          <TouchableOpacity
            onPress={handleCloseMediaModal}
            className={`justify-start items-center flex-row`}
            style={{ gap: wp(2) }}
          >
            <AntDesign name="close" size={24} color="#fff" />
          </TouchableOpacity>
          {media && (
            <TouchableOpacity
              onPress={async () => {
                if (media.type === "image") {
                  const path = await handleChooseMedia("image");
                  setMedia(path);
                }
              }}
              className={`justify-start items-center flex-row`}
              style={{ gap: wp(2) }}
            >
              <Feather name="edit-2" size={24} color="#fff" />
            </TouchableOpacity>
          )}
        </View>
        {media && (
          <Zoomable>
            {media?.type === "image" ? (
              <Image
                source={{ uri: media.uri }}
                resizeMode="contain"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            ) : (
              <View className={`flex-1 justify-center items-center`}>
                <Text
                  className={`text-white text-center justify-center`}
                  style={{ fontSize: hp(3) }}
                >
                  {media.name}
                </Text>
              </View>
            )}
          </Zoomable>
        )}
      </View>
    </GestureHandlerRootView>
  );
};

export default ViewMedia;
