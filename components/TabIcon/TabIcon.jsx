import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

const TabIcon = ({ children, active }) => {
  return (
    <View
      className={`py-1 rounded-full justify-center shadow-2xl items-center`}
      style={{
        backgroundColor: active ? "rgba(18, 176, 190, 0.5)" : "transparent",
        width: widthPercentageToDP(15),
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 100,
      }}
    >
      {children}
    </View>
  );
};

export default TabIcon;
