import { Link } from "expo-router";
import { Text, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import AntDesign from "@expo/vector-icons/AntDesign";
import NavbarContainer from "./NavbarContainer";
import UserImage from "../UserImage/UserImage";
import useRoom from "../../hooks/useRoom";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const RoomNavbar = () => {
  const { chatter } = useContext(AppContext);

  return (
    <NavbarContainer>
      <View
        className={`flex-1 justify-start items-center flex-row`}
        style={{ gap: wp(4) }}
      >
        <Link href={"/app/chat"}>
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </Link>
        <UserImage avatar={chatter.avatar} size={10} />
        <Text style={{ fontSize: wp(5) }} className={`text-white font-[800]`}>
          {chatter ? chatter.username : "Loading..."}
        </Text>
      </View>
    </NavbarContainer>
  );
};

export default RoomNavbar;
