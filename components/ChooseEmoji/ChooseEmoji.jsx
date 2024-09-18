import React from "react";
import EmojiPicker from "rn-emoji-keyboard";
import { View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import DeleteButton from "./ChooseEmojiHelperButtons";

const ChooseEmoji = ({
  formik,
  open,
  handleClose,
  handleSelect,
  handleRemove,
}) => {
  return (
    <View
      className={`relative left-0 bottom-0 bg-primary`}
      style={{
        height: hp(41),
      }}
    >
      <EmojiPicker
        onEmojiSelected={(val) => {
          handleSelect(val.emoji);
        }}
        open={open}
        onClose={handleClose}
        allowMultipleSelections
        categoryPosition="top"
        customButtons={[<DeleteButton press={handleRemove} />]}
        theme={{
          backdrop: "rgba(0,0,0,0.3)",
          knob: "#12b0be",
          container: "#162832",
          header: "#fff",
          skinTonesContainer: "#252427",
          category: {
            icon: "#fff",
            iconActive: "#12b0be",
            container: "#000",
            containerActive: "#162832",
          },
        }}
      />
    </View>
  );
};

export default ChooseEmoji;
