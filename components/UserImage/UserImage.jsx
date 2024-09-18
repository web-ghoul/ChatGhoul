import React, { useContext } from "react";
import { Image, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { AuthContext } from "../../contexts/AuthContext";

const UserImage = ({ avatar, size, gender }) => {
  const { user } = useContext(AuthContext);

  return (
    <View
      className={`justify-center rounded-full bg-primary`}
      style={{
        width: wp(size || 12),
        height: wp(size || 12),
      }}
    >
      <Image
        className={`w-full h-full rounded-full`}
        source={
          avatar
            ? { uri: avatar }
            : gender === "male"
            ? require(`../../assets/images/male.png`)
            : require(`../../assets/images/female.png`)
        }
      />
    </View>
  );
};

export default UserImage;
