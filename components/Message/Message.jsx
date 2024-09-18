import { useContext } from "react";
import { Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { AuthContext } from "../../contexts/AuthContext";
import UserImage from "../UserImage/UserImage";
import { AppContext } from "../../contexts/AppContext";
import { handleMessageTime } from "../../functions/handleDate";

const Message = ({ message, index }) => {
  const { user } = useContext(AuthContext);
  const { messages } = useContext(AppContext);
  const sender = user.id === message.sender;
  const isFirst =
    index > 0
      ? sender === (messages[index - 1].sender === user.id)
        ? false
        : true
      : true;

  return (
    <View
      className={`justify-center ${sender ? "items-end " : "items-start"} `}
      style={{
        shadowColor: "#162832",
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 50,
        gap: wp(2),
        paddingHorizontal: wp(2),
      }}
    >
      {isFirst && (
        <View
          className={`${
            sender ? "bg-sender_message" : "bg-message"
          } rounded-full absolute ${
            sender ? "right-[-2px]" : "left-[-2px]"
          } top-0`}
          style={{ height: hp(1), width: wp(6) }}
        />
      )}
      <View
        className={`${sender ? "bg-sender_message" : "bg-message"} rounded-lg`}
        style={{
          paddingHorizontal: wp(2),
          paddingVertical: hp(1),
          gap: hp(0.5),
          maxWidth: wp(75),
        }}
      >
        <Text
          className={`text-white`}
          style={{
            fontSize: wp(4),
          }}
        >
          {message.message}
        </Text>
        <Text
          className={`text-gray-300`}
          style={{
            fontSize: wp(2.5),
          }}
        >
          {handleMessageTime(message.updatedAt) || "sending..."}
        </Text>
      </View>
    </View>
  );
};

export default Message;
