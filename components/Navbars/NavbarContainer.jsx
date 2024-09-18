import React from "react";
import { globalStyles } from "../../styles/globalStyles";
import { Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const ios = Platform.OS === "ios";

const NavbarContainer = ({ children }) => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      className={`bg-primary pb-2 flex-row justify-between items-center border-[0.5px] border-[#2d5872]`}
      style={[
        globalStyles.container,
        { paddingTop: ios ? top : top + 10, gap: wp(3) },
      ]}
    >
      {children}
    </View>
  );
};

export default NavbarContainer;
