import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import RoomNavbar from "../../components/Navbars/RoomNavbar";
import TabIcon from "../../components/TabIcon/TabIcon";
import CameraModal from "../../modals/CameraModal";

const _layout = () => {
  return (
    <View className={`flex-1 bg-black`}>
      <Stack
        screenOptions={{
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#fff",
          tabBarStyle: {
            backgroundColor: "#162832",
            borderColor: "#2d5872",
            height: hp(12),
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
        <Stack.Screen
          name="[room]"
          options={{
            header: () => <RoomNavbar />,
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
      </Stack>
      <StatusBar style="light" />
      <CameraModal />
    </View>
  );
};

export default _layout;
