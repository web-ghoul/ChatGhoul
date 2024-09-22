import Ionicons from '@expo/vector-icons/Ionicons';
import { useContext, useEffect, useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { AppContext } from '../../contexts/AppContext';
import { AuthContext } from '../../contexts/AuthContext';
import { ModalsContext } from '../../contexts/ModalsContext';
import { handleMessageTime } from '../../functions/handleDate';
import { globalStyles } from '../../styles/globalStyles';

const Message = ({ message, index }) => {
  const [selected, setSelected] = useState(false);
  const { user } = useContext(AuthContext);
  const {
    messages,
    selectedMessages,
    setSelectedMessages,
    setMedia,
    setMessage,
  } = useContext(AppContext);
  const { handleOpenViewMediaModal } = useContext(ModalsContext);
  const sender = user.id === message.sender;
  const isFirst =
    index > 0
      ? sender === (messages[index - 1].sender === user.id)
        ? false
        : true
      : true;

  const handleToggle = () => {
    if (selected) {
      setSelectedMessages(msgs => {
        const newMsgs = [...msgs];
        return newMsgs.filter(i => i !== index);
      });
    } else {
      setSelectedMessages(msgs => {
        const newMsgs = [...msgs];
        newMsgs.push(index);
        return newMsgs;
      });
    }
  };

  useEffect(() => {
    setSelected(Boolean(selectedMessages.some(i => i === index)));
  }, [selectedMessages]);

  return (
    <TouchableWithoutFeedback
      underlayColor={'rgba(0,0,0,0.5)'}
      onPress={() => {
        if (selectedMessages.length > 0) {
          handleToggle();
        }
      }}
      onLongPress={handleToggle}
    >
      <View style={globalStyles.container}>
        <View
          className={`flex-1 justify-center ${
            sender ? 'items-end ' : 'items-start'
          } `}
        >
          <View
            style={{
              shadowColor: '#162832',
              shadowOffset: { width: 10, height: 10 },
              shadowOpacity: 0.25,
              shadowRadius: 5,
              elevation: 50,
              gap: wp(2),
              paddingHorizontal: wp(2),
              minWidth: wp(25),
              maxWidth: wp(75),
            }}
          >
            {isFirst && (
              <View
                className={`${
                  sender ? 'bg-sender_message' : 'bg-message'
                } rounded-full absolute top-0 ${sender ? 'right-0' : 'left-0'}`}
                style={{ height: hp(1), width: wp(4) }}
              />
            )}
            <View
              className={`${
                sender ? 'bg-sender_message' : 'bg-message'
              } rounded-lg`}
              style={{
                paddingHorizontal: wp(2),
                paddingVertical: hp(1),
                gap: hp(0.5),
                maxWidth: wp(75),
              }}
            >
              {message.media &&
                (message.media.type.split('/')[0] === 'image' ? (
                  <TouchableOpacity
                    onPress={() => {
                      setMessage(message);
                      setMedia(message.media);
                      handleOpenViewMediaModal();
                    }}
                    className={`flex-1 rounded-md overflow-hidden`}
                    style={{ width: wp(50), height: hp(25) }}
                  >
                    <Image
                      source={{ uri: message.media.url }}
                      className={`w-full h-full`}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => {}}
                    className={`flex-1 flex-row rounded-md overflow-hidden flex justify-between items-center p-2`}
                    style={{
                      width: wp(50),
                      height: hp(8),
                      backgroundColor: 'rgba(0,0,0,0.5)',
                    }}
                  >
                    <View className={`flex-1 overflow-hidden`}>
                      <Image
                        source={require('../../assets/images/pdf.png')}
                        style={{ height: '100%', width: wp(10) }}
                      />
                    </View>
                    <View className={`flex-3`}>
                      <Text
                        className={`text-white font-[700]`}
                        numberOfLines={1}
                      >
                        {message.media.name}
                        {message.media.name}
                        {message.media.name}
                        {message.media.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              <Text
                className={`text-white`}
                style={{
                  fontSize: wp(4),
                }}
              >
                {message.message}
              </Text>
              <View
                className={`flex-row justify-end items-center`}
                style={{ gap: wp(2) }}
              >
                {sender && (
                  <Text
                    className={`text-gray-300 text-right`}
                    style={{
                      fontSize: wp(2.5),
                    }}
                  >
                    {message?.editAt && 'Edited'}
                  </Text>
                )}
                <Text
                  className={`text-gray-300 text-right`}
                  style={{
                    fontSize: wp(2.5),
                  }}
                >
                  {handleMessageTime(
                    message?.editAt ? message.editAt : message.updatedAt,
                  ) || 'sending...'}
                </Text>
                {sender &&
                  (handleMessageTime(message.updatedAt) ? (
                    <View className={`flex-row justify-center items-center`}>
                      {message?.seen ? (
                        <Ionicons
                          name="checkmark-done-sharp"
                          size={16}
                          color="#00bce4"
                        />
                      ) : (
                        <Ionicons
                          name="checkmark-done-sharp"
                          size={16}
                          color="#ddd"
                        />
                      )}
                    </View>
                  ) : (
                    <View>
                      <Ionicons
                        name="checkbox-outline"
                        size={14}
                        color="#ddd"
                      />
                    </View>
                  ))}
              </View>
            </View>
          </View>
        </View>
        <View
          className={`absolute w-full h-full`}
          style={{
            width: wp(100),
            backgroundColor: selected ? 'rgba(0,0,0,0.5)' : 'transparent',
            zIndex: selected ? 100 : -1,
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Message;
