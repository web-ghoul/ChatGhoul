import { Link } from "expo-router";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AntDesign from "@expo/vector-icons/AntDesign";
import NavbarContainer from "./NavbarContainer";
import UserImage from "../UserImage/UserImage";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import { ModalsContext } from "../../contexts/ModalsContext";
import { AuthContext } from "../../contexts/AuthContext";
import useRoom from "../../hooks/useRoom";
import * as Clipboard from "expo-clipboard";
import { handleMessageTime } from "../../functions/handleDate";

const RoomNavbar = () => {
  const {
    chatter,
    selectedMessages,
    setEditableMessage,
    messages,
    setSelectedMessages,
  } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  const { handleOpenMessageModal, handleCloseMessageModal } =
    useContext(ModalsContext);
  const { handleDeleteMessage } = useRoom();

  const handleEditMessage = () => {
    const chosenMessage = messages[selectedMessages[0]];
    setEditableMessage(chosenMessage);
    handleOpenMessageModal();
  };

  return (
    <NavbarContainer>
      <View
        className={`flex-1 justify-between items-center flex-row`}
        style={{
          height: hp(5),
        }}
      >
        {selectedMessages.length > 0 ? (
          <View
            className={`flex-1 justify-between items-center flex-row`}
            style={{ gap: wp(6) }}
          >
            <View
              className={`justify-start items-center flex-row`}
              style={{ gap: wp(4) }}
            >
              <TouchableOpacity
                onPress={() => {
                  handleCloseMessageModal();
                  setSelectedMessages([]);
                }}
              >
                <AntDesign name="arrowleft" size={24} color="#fff" />
              </TouchableOpacity>
              <Text
                style={{ fontSize: wp(5) }}
                className={`text-white font-[800]`}
              >
                {selectedMessages.length}
              </Text>
            </View>
            <View
              className={`flex-row justify-end items-center`}
              style={{ gap: wp(6) }}
            >
              <TouchableOpacity
                onPress={async () => {
                  if (selectedMessages.length === 1) {
                    await Clipboard.setStringAsync(
                      messages[selectedMessages[0]].message
                    );
                  } else {
                    const copiedData = selectedMessages.map((index) => {
                      const msg = messages[index];
                      return `[${handleMessageTime(msg.createdAt)}] ${
                        msg.sender === user.id
                          ? user.username
                          : chatter.username
                      }: ${msg.message}`;
                    });
                    await Clipboard.setStringAsync(copiedData.join(""));
                  }
                  setSelectedMessages([]);
                }}
              >
                <MaterialCommunityIcons
                  name="content-copy"
                  size={24}
                  color="#fff"
                />
              </TouchableOpacity>
              {selectedMessages.length === 1 &&
                messages[selectedMessages[0]].sender === user.id && (
                  <>
                    <TouchableOpacity
                      onPress={() =>
                        Alert.alert("Delete Message", "Are You Sure ?", [
                          {
                            text: "Yes",
                            onPress: () =>
                              handleDeleteMessage(
                                messages[selectedMessages[0]].id
                              ),
                          },
                          {
                            text: "No",
                            style: "cancel",
                          },
                        ])
                      }
                    >
                      <AntDesign name="delete" size={24} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleEditMessage}>
                      <Feather name="edit" size={24} color="#fff" />
                    </TouchableOpacity>
                  </>
                )}
            </View>
          </View>
        ) : (
          <View
            className={`flex-1 justify-start items-center flex-row`}
            style={{ gap: wp(4) }}
          >
            <Link href={"/app/chat"}>
              <AntDesign name="arrowleft" size={24} color="#fff" />
            </Link>
            <UserImage avatar={chatter.avatar} size={10} />
            <Text
              style={{ fontSize: wp(5) }}
              className={`text-white font-[800]`}
            >
              {chatter ? chatter.username : "Loading..."}
            </Text>
          </View>
        )}
      </View>
    </NavbarContainer>
  );
};

export default RoomNavbar;
