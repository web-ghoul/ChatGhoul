import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ChatsNavbar from "../../components/Navbars/ChatsNavbar";
import ProfileNavbar from "../../components/Navbars/ProfileNavbar";
import TabIcon from "../../components/TabIcon/TabIcon";
import CameraModal from "../../modals/CameraModal";
import UploadAvatarModal from "../../modals/UploadAvatarModal";

const _layout = () => {
  return (
    <View className={`flex-1 bg-black`}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#fff",
          tabBarStyle: {
            backgroundColor: "#162832",
            borderColor: "#2d5872",
            height: hp(10),
            justifyContent: "center",
            flexDirection: "row",
            paddingHorizontal: wp(4),
            paddingTop: 10,
            paddingBottom: 10,
          },
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: wp(3.4),
            fontWeight: "900",
          },
        }}
      >
        <Tabs.Screen
          name="chat"
          options={{
            header: () => <ChatsNavbar />,
            tabBarBadge: 2,
            tabBarBadgeStyle: {
              backgroundColor: "#fff",
              color: "#12b0be",
              fontWeight: "900",
              fontSize: wp(3),
            },
            tabBarIcon: ({ focused }) => (
              <TabIcon active={focused}>
                <Ionicons
                  name="chatbox-ellipses-outline"
                  size={24}
                  color="#fff"
                />
              </TabIcon>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            header: () => <ProfileNavbar />,
            tabBarIcon: ({ focused }) => (
              <TabIcon active={focused}>
                <AntDesign size={24} name="user" color={"#fff"} />
              </TabIcon>
            ),
          }}
        />
      </Tabs>
      <StatusBar style="light" />
      <CameraModal />
      <UploadAvatarModal />
    </View>
  );
};

export default _layout;
