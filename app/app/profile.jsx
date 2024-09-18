import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { globalStyles } from "../../styles/globalStyles";
import Avatar from "../../components/Avatar/Avatar";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import DataBox from "../../components/DataBox/DataBox";
import { AuthContext } from "../../contexts/AuthContext";
import SpecialTitle from "../../components/SpecialTitle/SpecialTitle";
import Forms from "../../forms/Forms";
import { Feather, Fontisto } from "@expo/vector-icons";
import AvatarModal from "../../modals/AvatarModal";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <ScrollView className={`bg-primary`}>
      <View className={`bg-primary flex-1`} style={{ gap: hp(4) }}>
        <View
          style={[
            globalStyles.container,
            {
              shadowColor: "rgba(0, 0, 0, 0.5)",
              shadowOffset: { width: 10, height: 10 },
              shadowOpacity: 0.25,
              shadowRadius: 5,
              elevation: 100,
              paddingVertical: hp(4),
            },
          ]}
        >
          <Avatar />
        </View>
        <View
          className={`flex-col flex-1 items-start justify-stretch`}
          style={[globalStyles.container]}
        >
          <View
            className={`flex-1 flex-row flex-wrap justify-between items-center`}
            style={{
              gap: wp(4),
            }}
          >
            <SpecialTitle title={"Account Info"} size={8} />
          </View>
          {user && (
            <View
              className={`flex-1 justify-stretch items-center flex-col py-6`}
              style={{
                gap: hp(2),
              }}
            >
              <DataBox
                value={user.email}
                title={"Email"}
                icon={<Feather name="mail" size={22} color="#fff" />}
              />
              <DataBox
                value={user.username}
                title={"Username"}
                icon={<Feather name="user" size={22} color="#fff" />}
              />
              <DataBox
                value={user.phone}
                title={"Phone"}
                icon={<Feather name="smartphone" size={22} color="#fff" />}
              />
              <DataBox
                value={user.gender}
                title={"Gender"}
                icon={<Fontisto name="transgender" size={22} color="#fff" />}
              />
            </View>
          )}
        </View>
      </View>
      <Forms type={"editUser"} />
      <AvatarModal />
    </ScrollView>
  );
};

export default Profile;
