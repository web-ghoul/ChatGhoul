import { CameraView } from "expo-camera";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { ModalsContext } from "../../contexts/ModalsContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import usePickPhoto from "../../hooks/usePickPhoto";
import { useLocalSearchParams, usePathname } from "expo-router";

const PickUpPhoto = () => {
  const pathname = usePathname();
  const { room } = useLocalSearchParams();
  const { handleTakePic } = usePickPhoto();
  const { handleCloseCameraModal } = useContext(ModalsContext);
  const [facing, setFacing] = useState("front");
  const [zoom, setZoom] = useState(0);
  const cameraRef = useRef(null);
  const animatedZoom = useRef(new Animated.Value(0)).current;

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  useEffect(() => {
    Animated.timing(animatedZoom, {
      toValue: zoom,
      duration: 50,
      useNativeDriver: false,
    }).start();
  }, [zoom]);

  useEffect(() => {
    if (pathname === "/app/profile") {
      setFacing("front");
    } else if (pathname === `/room/${room}`) {
      setFacing("back");
    }
  }, [pathname]);
  return (
    <View className={`flex-1`}>
      <CameraView
        ref={cameraRef}
        facing={facing}
        className={`flex-1 w-full`}
        style={{
          height: hp(100),
          paddingHorizontal: wp(4),
          paddingVertical: hp(4),
        }}
        zoom={zoom}
      >
        <TouchableOpacity
          onPress={handleCloseCameraModal}
          className={`rounded-full justify-center items-center`}
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            height: wp(15),
            width: wp(15),
          }}
        >
          <AntDesign name="close" size={30} color="#fff" />
        </TouchableOpacity>

        <View className={`flex-1 justify-center items-center`}>
          <TouchableOpacity
            onPress={() => handleTakePic(cameraRef)}
            className={`justify-center items-center p-2 border-4 border-white rounded-full absolute bottom-0`}
            style={{ height: wp(20), width: wp(20) }}
          >
            <View
              className={`bg-white rounded-full`}
              style={{ height: wp(15), width: wp(15) }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={toggleCameraFacing}
            className={`absolute bottom-0 left-0 rounded-full justify-center items-center`}
            style={{
              backgroundColor: "rgba(0,0,0,0.4)",
              height: wp(15),
              width: wp(15),
            }}
          >
            <FontAwesome6 name="camera-rotate" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};

export default PickUpPhoto;
