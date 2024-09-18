import React, { useContext } from "react";
import { Platform, Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AuthContext } from "../../contexts/AuthContext";
import UserMenu from "../UserMenu/UserMenu";

const ios = Platform.OS === "ios";

const ChatNavbar = () => {
  const { top } = useSafeAreaInsets();
  const { user } = useContext(AuthContext);

  return (
    <View
      className={`bg-black px-5 pb-6 flex-row justify-between items-center shadow-black border-b border-blue-400`}
      style={{ paddingTop: ios ? top : top + 10 }}
    >
      <Text className={`text-white font-[800]`} style={{ fontSize: hp(3) }}>
        ChatGhoul
      </Text>
      <UserMenu />
    </View>
  );
};

export default ChatNavbar;
