import { useRouter } from 'expo-router';
import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { AppContext } from '../../contexts/AppContext';
import { AuthContext } from '../../contexts/AuthContext';
import { ModalsContext } from '../../contexts/ModalsContext';
import { globalStyles } from '../../styles/globalStyles';
import UserImage from '../UserImage/UserImage';

const UserView = ({ receiver, helperText, avatarSize }) => {
  const router = useRouter();
  const { setChatter, setImageURL } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  const { handleOpenShowImageModal } = useContext(ModalsContext);

  return (
    <View
      className={`flex-row justify-start items-center`}
      style={[{ gap: wp(4) }, globalStyles.container]}
    >
      <TouchableOpacity
        onPress={() => {
          setImageURL(receiver.avatar);
          handleOpenShowImageModal();
          setChatter(receiver);
        }}
      >
        <UserImage
          avatar={receiver.avatar}
          size={avatarSize}
          gender={receiver.gender}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setChatter(receiver);
          router.push(
            `/room/${
              user.id > receiver.id
                ? user.id + '_' + receiver.id
                : receiver.id + '_' + user.id
            }`,
          );
        }}
        className={`w-full justify-center items-start`}
        style={{ gap: hp(0.5) }}
      >
        <Text className={`text-white font-[800]`} style={{ fontSize: wp(4.5) }}>
          {receiver.username}
        </Text>
        <Text
          className={`text-gray-300 font-[600] `}
          style={{ fontSize: wp(3.5) }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {helperText || 'Hello There!...'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserView;
