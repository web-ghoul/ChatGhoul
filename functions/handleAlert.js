import Toast from "react-native-toast-message";

export const handleAlert = (text1 = "", text2 = "", type) => {
  Toast.show({
    type,
    text1,
    text2,
  });
};
