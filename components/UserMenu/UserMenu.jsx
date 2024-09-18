import React, { useContext } from "react";
import { Image, Text, View } from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import { AuthContext } from "../../contexts/AuthContext";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Divider from "../Divider/Divider";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import UserImage from "../UserImage/UserImage";

const UserMenu = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const router = useRouter();

  return (
    <Menu>
      <MenuTrigger>
        <UserImage
          size={10}
          avatar={user ? user.avatar : ""}
          gender={user ? user.gender : "male"}
        />
      </MenuTrigger>
      <MenuOptions>
        <MenuOption
          onSelect={() => {
            router.push("app/profile");
          }}
        >
          <View className={`flex-row justify-between items-center p-2`}>
            <Text className={`font-[800] text-light`}>Profile</Text>
            <FontAwesome name="user" size={20} style={{ color: "#12b0be" }} />
          </View>
        </MenuOption>
        <Divider />
        <MenuOption onSelect={handleLogout}>
          <View className={`flex-row justify-between items-center p-2`}>
            <Text className={`font-[600] text-red-500`}>Logout</Text>
            <MaterialIcons name="logout" size={20} color="red" />
          </View>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};

export default UserMenu;
