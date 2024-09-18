import React from "react";
import { Text } from "react-native";

const HelperText = ({ text }) => {
  return <Text className={`text-red-600 `}>{text}</Text>;
};

export default HelperText;
