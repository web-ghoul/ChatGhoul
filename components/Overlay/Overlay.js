import React from "react";
import { View } from "react-native";

const Overlay = () => {
  return (
    <View
      className={`bg-[rgba(0,0,0,0.2)] w-full h-full absolute top-0 left-0 z-[10]`}
    />
  );
};

export default Overlay;
