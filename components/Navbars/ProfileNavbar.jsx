import { Link } from "expo-router";
import { Text, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import AntDesign from "@expo/vector-icons/AntDesign";
import NavbarContainer from "./NavbarContainer";

const ProfileNavbar = () => {
  return (
    <NavbarContainer>
      <Link href={"/app/chat"}>
        <View
          className={`flex-1 justify-start items-center flex-row`}
          style={{ gap: wp(4) }}
        >
          <AntDesign name="arrowleft" size={24} color="#fff" />
          <Text style={{ fontSize: wp(6) }} className={`text-white font-[800]`}>
            Profile
          </Text>
        </View>
      </Link>
    </NavbarContainer>
  );
};

export default ProfileNavbar;
