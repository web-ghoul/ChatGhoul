import * as DocumentPicker from "expo-document-picker";
import { useLocalSearchParams } from "expo-router";
import { getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

const useUploadFiles = () => {
  const { room } = useLocalSearchParams();

  const handlePickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === "success") {
      return result;
    }
  };

  const handleUploadFile = async (filePath) => {
    if (!filePath) {
      return;
    }
    const response = await fetch(filePath);
    const blob = await response.blob();
    const storageRef = ref(storage, `chats/${room}/files`);
    const snapshot = await uploadBytes(storageRef, blob);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  };

  return { handlePickDocument, handleUploadFile };
};

export default useUploadFiles;
