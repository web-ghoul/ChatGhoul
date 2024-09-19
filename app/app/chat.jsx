import { View, Text, FlatList } from "react-native";
import React, { useContext, useEffect } from "react";
import useUsers from "../../hooks/useUsers";
import { AppContext } from "../../contexts/AppContext";
import UserView from "../../components/UserView/UserView";
import Loading from "../../components/Loading/Loading";
import { globalStyles } from "../../styles/globalStyles";
import Divider from "../../components/Divider/Divider";
import { AuthContext } from "../../contexts/AuthContext";
import CameraBox from "../../components/CameraBox/CameraBox";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const Chat = () => {
  const { handleGetAllUsers } = useUsers();
  const { users } = useContext(AppContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      handleGetAllUsers();
    }
  }, [user]);

  return (
    <View className={`bg-primary flex-1 justify-center items-stretch`}>
      {users ? (
        <FlatList
          data={users}
          renderItem={({ item }) => <UserView receiver={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingVertical: hp(1),
          }}
          ItemSeparatorComponent={
            <View className={`border border-[#1a2a35] left-0 w-full m-2`} />
          }
        />
      ) : (
        <Loading size={40} />
      )}
    </View>
  );
};

export default Chat;
