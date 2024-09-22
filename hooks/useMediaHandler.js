import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import { useLocalSearchParams } from "expo-router";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { storage } from "../firebase";

const useMediaHandler = () => {
  const { room } = useLocalSearchParams();
  const { user } = useContext(AuthContext);

  const handleChooseMedia = async (type) => {
    if (type === "image") {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [3, 3],
        quality: 1,
      });
      if (result.canceled) {
        return "";
      }
      return result.assets[0];
    } else if (type === "file") {
      let result = await DocumentPicker.getDocumentAsync({});
      if (result.canceled) {
        return "";
      }
      return result.assets[0];
    }
  };

  const handleUploadMedia = async (mediaPath) => {
    if (!mediaPath) {
      return;
    }
    const filename = mediaPath.split("/")[mediaPath.split("/").length - 1];
    const response = await fetch(mediaPath);
    const blob = await response.blob();
    const storageRef = ref(
      storage,
      `chats/${room}/${user.id}_${filename}_${Math.random() * Math.random()}`
    );
    const snapshot = await uploadBytes(storageRef, blob);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  };

  return { handleChooseMedia, handleUploadMedia };
};

export default useMediaHandler;
