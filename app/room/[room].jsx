import {
  View,
  Text,
  ImageBackground,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { useContext, useEffect, useRef, useState } from "react";
import Forms from "../../forms/Forms";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import useRoom from "../../hooks/useRoom";
import AnimatedLottieView from "lottie-react-native";
import { AppContext } from "../../contexts/AppContext";
import Message from "../../components/Message/Message";
import { globalStyles } from "../../styles/globalStyles";
import { AuthContext } from "../../contexts/AuthContext";
import { store } from "../../storages/MMKV";
import FilesModal from "../../modals/FilesModal";

const Room = () => {
  const { handleGetMessages } = useRoom();
  const { messages } = useContext(AppContext);
  const { loading } = useContext(AuthContext);
  const flatListRef = useRef(null);
  const [flatListHeight, setFlatListHeight] = useState(0);

  const handleFlatListLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setFlatListHeight(height);
  };

  const handleScrollToEnd = () => {
    if (flatListRef.current && messages.length > 0) {
      flatListRef.current.scrollToOffset({
        animated: true,
        offset: flatListHeight * 10,
      });
    }
  };

  useEffect(() => {
    handleGetMessages();
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/images/chat_back.png")}
      className={`bg-primary flex-1 justify-stretch items-stretch content-between self-stretch flex-col relative`}
      resizeMode="cover"
    >
      <View
        className={`absolute  left-0 top-0 right-0`}
        style={{
          backgroundColor:
            messages.length > 0 ? "rgba(0,0,0,0.65)" : "rgba(0,0,0,0.8)",
          width: wp(100),
          height: hp(100),
        }}
      />
      {messages.length === 0 || loading ? (
        <View
          className={`justify-center items-center content-center 0 h-full flex-col`}
        >
          <View
            className={`justify-center items-center relative `}
            style={{
              height: hp(35),
            }}
          >
            <AnimatedLottieView
              source={
                !loading
                  ? require("../../assets/lotties/start_chatting.json")
                  : require("../../assets/lotties/message.json")
              }
              style={{
                width: wp(80),
                height: wp(80),
                position: "absolute",
              }}
              autoPlay
              loop
            />
          </View>
          <Text
            className={`text-center text-white font-[800] `}
            style={{ fontSize: hp(4) }}
          >
            {loading ? "Loading..." : "Start Chatting"}
          </Text>
        </View>
      ) : (
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={({ item, index }) => (
            <Message message={item} index={index} />
          )}
          keyExtractor={(item) => item.id}
          onLayout={handleFlatListLayout}
          contentContainerStyle={[
            {
              paddingVertical: hp(2),
              paddingBottom: hp(10),
              gap: hp(1),
            },
            globalStyles.container,
          ]}
          onContentSizeChange={handleScrollToEnd}
        />
      )}
      <View className={`absolute bottom-0 left-0 w-full`}>
        <Forms type={"sendMessage"} />
      </View>
      <FilesModal />
    </ImageBackground>
  );
};

export default Room;
