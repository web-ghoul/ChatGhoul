import React from "react";
import { Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const MessagesDate = ({ date }) => {
  return (
    <View className={`items-center`} style={{ paddingVertical: hp(2) }}>
      <Text className={`font-[800] text-white`} style={{ fontSize: hp(1.5) }}>
        {date}
      </Text>
    </View>
  );
};

export default MessagesDate;
