import React, { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AppContext } from "../../contexts/AppContext";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { ModalsContext } from "../../contexts/ModalsContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { globalStyles } from "../../styles/globalStyles";
import { Zoomable } from "@likashefqet/react-native-image-zoom";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ViewImage = () => {
  const { imageURL, chatter } = useContext(AppContext);
  const { handleCloseShowImageModal, handleOpenAvatarModal } =
    useContext(ModalsContext);
  console.log(imageURL);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className={`flex-1 justify-center items-stretch`}>
        <View
          className={`flex-1 justify-between items-center absolute top-0 left-0 w-full z-[1000] flex-row`}
          style={[globalStyles.container, { paddingVertical: hp(2) }]}
        >
          <TouchableOpacity
            onPress={handleCloseShowImageModal}
            className={`justify-start items-center flex-row`}
            style={{ gap: wp(2) }}
          >
            <AntDesign name="arrowleft" size={24} color="#fff" />
            <Text
              className={`text-white font-[700]`}
              style={{
                fontSize: wp(5),
              }}
            >
              {chatter ? chatter.username : "Profile Avatar"}
            </Text>
          </TouchableOpacity>
          {!chatter && (
            <TouchableOpacity onPress={handleOpenAvatarModal}>
              <MaterialIcons name="edit" size={24} color="#fff" />
            </TouchableOpacity>
          )}
        </View>
        <Zoomable>
          <Image
            source={
              imageURL
                ? { uri: imageURL }
                : chatter && chatter.gender === "female"
                ? require("../../assets/images/female.png")
                : require("../../assets/images/male.png")
            }
            resizeMode="contain"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Zoomable>
      </View>
    </GestureHandlerRootView>
  );
};

export default ViewImage;
