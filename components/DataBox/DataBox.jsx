import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { ModalsContext } from "../../contexts/ModalsContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const DataBox = ({ title, value, icon }) => {
  const { handleOpenUserModal } = useContext(ModalsContext);
  const usedTitle = title.toLowerCase();

  const content = (
    <>
      {icon}
      <View
        className={`flex-1 justify-center items-start flex-col`}
        style={{ gap: wp(1) }}
      >
        <Text
          className={`font-[7000]`}
          style={{
            color: "rgba(255,255,255,0.3)",
            fontSize: wp(3.5),
          }}
        >
          {title}
        </Text>
        <Text
          className={`text-light font-[7000]`}
          style={{
            fontSize: wp(4),
          }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {value}
        </Text>
      </View>
    </>
  );

  return usedTitle === "email" ? (
    <View
      className={`flex-1 justify-center items-center flex-row  px-4 py-2 rounded-md`}
      style={{
        gap: wp(4),
      }}
    >
      {content}
    </View>
  ) : (
    <TouchableOpacity
      onPress={() => handleOpenUserModal(usedTitle)}
      className={`flex-1 justify-center items-center flex-row  px-4 py-2 rounded-md`}
      style={{
        gap: wp(4),
      }}
    >
      {content}
      <MaterialIcons name="mode-edit" size={24} color="#fff" />
    </TouchableOpacity>
  );
};

export default DataBox;
