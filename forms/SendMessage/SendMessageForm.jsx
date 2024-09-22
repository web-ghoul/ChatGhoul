import Feather from "@expo/vector-icons/Feather";
import React, { useContext, useEffect, useRef, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AnimatedLottieView from "lottie-react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ModalsContext } from "../../contexts/ModalsContext";

const SendMessageForm = ({ formik, type }) => {
  const { handleSubmit, handleChange, handleBlur, values } = formik;
  const { handleOpenFilesModal, handleOpenCameraModal, openMessageModal } =
    useContext(ModalsContext);
  const inputRef = useRef();
  const [lines, setLines] = useState(1);
  const [h, setH] = useState(0);

  const handleOpenKeyboard = () => {
    if (inputRef && inputRef.current) {
      handleCloseEmojiPicker();
      inputRef.current.focus();
      toEnd();
    }
  };

  useEffect(() => {
    if (!formik.values.message) {
      setLines(1);
    }
  }, [formik]);

  useEffect(() => {
    if (openMessageModal) {
      inputRef.current.focus();
    }
  }, [openMessageModal]);

  return (
    <View className={``}>
      <View
        className={`flex-1 justify-between items-end flex-row !z-[10000]`}
        style={{ gap: wp(2), paddingHorizontal: wp(1), paddingVertical: hp(1) }}
      >
        <View
          className={`bg-primary ${
            lines > 2 ? "rounded-2xl" : "rounded-full"
          } flex-1 flex-row p-2 justify-between ${
            lines === 1 ? "items-center" : "items-end"
          }`}
          style={{
            gap: wp(2),
            paddingHorizontal: wp(2),
            minHeight: hp(4),
            width: wp(68),
          }}
        >
          <TouchableOpacity
            className={`justify-center items-center p-2`}
            onPress={handleOpenKeyboard}
          >
            <FontAwesome name="keyboard-o" size={22} color="#999" />
          </TouchableOpacity>
          <TextInput
            ref={inputRef}
            className={`flex-1 h-auto text-white`}
            style={{ fontSize: wp(4.5) }}
            onChangeText={handleChange("message")}
            onContentSizeChange={(event) => {
              const { height } = event.nativeEvent.contentSize;
              if (formik.values.message && h > 0 && lines < 4) {
                setLines((cur) => {
                  if (height > h) {
                    return cur + 1;
                  } else if (height < h) {
                    return cur - 1;
                  }
                  return cur;
                });
              }
              setH(height);
            }}
            onBlur={handleBlur("message")}
            autoCapitalize="none"
            value={values.message}
            placeholder={type === "sendMedia" ? "Add a Caption..." : "Message"}
            placeholderTextColor={"#999"}
            keyboardType={"default"}
            multiline
            numberOfLines={lines}
            selectionColor="#12b0be"
          />
          {type !== "sendMedia" && (
            <View
              className={`flex-row justify-end items-center`}
              style={{ gap: wp(2) }}
            >
              <TouchableOpacity
                className={`justify-center items-center p-2`}
                onPress={handleOpenFilesModal}
              >
                <MaterialIcons name="attach-file" size={22} color="#999" />
              </TouchableOpacity>
              {formik.values.message.length === 0 && (
                <TouchableOpacity
                  className={`justify-center items-center p-2`}
                  onPress={handleOpenCameraModal}
                >
                  <Feather name="camera" size={22} color="#999" />
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
        <View
          className={`justify-center items-center`}
          style={{
            width: wp(12),
            height: wp(12),
          }}
        >
          {formik.values.message || type === "sendMedia" ? (
            <TouchableOpacity
              onPress={handleSubmit}
              className={`bg-light rounded-full justify-center items-center h-full w-full`}
            >
              <MaterialCommunityIcons name="send" size={30} color={`#fff`} />
            </TouchableOpacity>
          ) : (
            <View
              className={`justify-center items-center h-full w-full`}
              style={{
                height: hp(10),
              }}
            >
              <AnimatedLottieView
                source={require("../../assets/lotties/logo.json")}
                style={{
                  width: wp(26),
                  height: wp(26),
                  position: "absolute",
                }}
                autoPlay
                loop
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default SendMessageForm;
