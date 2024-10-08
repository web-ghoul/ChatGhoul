import AntDesign from '@expo/vector-icons/AntDesign';
import { Zoomable } from '@likashefqet/react-native-image-zoom';
import React, { useContext } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { AppContext } from '../../contexts/AppContext';
import { AuthContext } from '../../contexts/AuthContext';
import { ModalsContext } from '../../contexts/ModalsContext';
import { handleMessageTime } from '../../functions/handleDate';
import { globalStyles } from '../../styles/globalStyles';
import UserView from '../UserView/UserView';

const ViewMedia = () => {
  const { media, message, chatter } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  const { handleCloseViewMediaModal } = useContext(ModalsContext);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className={`flex-1 justify-center items-stretch`}>
        <View
          className={`flex-1 justify-between items-center absolute top-0 left-0 w-full z-[1000] flex-row`}
          style={[globalStyles.container, { paddingVertical: hp(2) }]}
        >
          <TouchableOpacity
            onPress={handleCloseViewMediaModal}
            className={`justify-start items-center flex-row`}
            style={{ gap: wp(2) }}
          >
            <AntDesign name="close" size={24} color="#fff" />
          </TouchableOpacity>
          <View>
            <UserView
              receiver={message.sender === user.id ? user : chatter}
              helperText={handleMessageTime(
                message?.editAt ? message.editAt : message.updatedAt,
              )}
              avatarSize={10}
            />
          </View>
        </View>
        {media && (
          <Zoomable>
            {media?.type.split('/')[0] === 'image' ? (
              <Image
                source={{ uri: media.url }}
                resizeMode="contain"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            ) : (
              <View className={`flex-1 justify-center items-center`}>
                {/* <Text
                  className={`text-white text-center justify-center`}
                  style={{ fontSize: hp(3) }}
                >
                  {media.name}
                </Text> */}
              </View>
            )}
          </Zoomable>
        )}
      </View>
    </GestureHandlerRootView>
  );
};

export default ViewMedia;
