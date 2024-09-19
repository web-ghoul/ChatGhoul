import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import * as DocumentPicker from "expo-document-picker";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Keyboard, TextInput, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import AnimatedLottieView from "lottie-react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ChooseEmoji from "../../components/ChooseEmoji/ChooseEmoji";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ModalsContext } from "../../contexts/ModalsContext";

const SendMessageForm = ({ formik }) => {
  const { handleSubmit, handleChange, handleBlur, values } = formik;
  const { handleOpenFilesModal, handleOpenCameraModal } =
    useContext(ModalsContext);
  const inputRef = useRef();
  const [openEmoji, setOpenEmoji] = useState(false);
  const [lines, setLines] = useState(1);
  const [h, setH] = useState(0);

  const handleOpenEmojiPicker = () => {
    setOpenEmoji(true);
    Keyboard.dismiss();
  };

  const handleCloseEmojiPicker = () => {
    setOpenEmoji(false);
  };

  const handleSelectEmoji = (emoji) => {
    inputRef.current.values = inputRef.current.values + emoji;
  };

  const handleOpenKeyboard = () => {
    if (inputRef && inputRef.current) {
      handleCloseEmojiPicker();
      inputRef.current.focus();
      console.log(1);
    }
  };

  const handleToggleEmojiAndKeyboard = () => {
    if (openEmoji) {
      handleOpenKeyboard();
    } else {
      handleOpenEmojiPicker();
    }
  };

  const handleRemoveLast = () => {};

  useEffect(() => {
    if (!formik.values.message) {
      setLines(1);
    }
  }, [formik]);

  return (
    <View>
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
            placeholder={"Message"}
            placeholderTextColor={"#999"}
            keyboardType={"default"}
            multiline
            numberOfLines={lines}
            selectionColor="#12b0be"
          />
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
        </View>
        <View
          className={`justify-center items-center`}
          style={{
            width: wp(12),
            height: wp(12),
          }}
        >
          {formik.values.message ? (
            <TouchableOpacity
              onPress={handleSubmit}
              className={`bg-light rounded-full justify-center items-center h-full w-full`}
            >
              <MaterialCommunityIcons name="send" size={30} color={`#`} />
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
      {openEmoji && (
        <ChooseEmoji
          open={openEmoji}
          handleSelect={handleSelectEmoji}
          handleClose={handleCloseEmojiPicker}
          handleRemove={handleRemoveLast}
        />
      )}
    </View>
  );
};

export default SendMessageForm;
