import * as ImagePicker from "expo-image-picker";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { db, storage } from "../firebase";

const useImageHandler = () => {
  const { user, setUser } = useContext(AuthContext);

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });
    if (result.canceled) {
      return "";
    }
    return result.assets[0].uri;
  };

  const handleUploadImage = async (imagePath) => {
    if (!imagePath) {
      return;
    }
    const response = await fetch(imagePath);
    const blob = await response.blob();
    const storageRef = ref(storage, `users/${user.id}/avatar`);
    const snapshot = await uploadBytes(storageRef, blob);
    const downloadURL = await getDownloadURL(snapshot.ref);
    await updateDoc(doc(db, "users", user.id), {
      avatar: downloadURL,
    }).then(() => {
      const newUser = { ...user };
      newUser.avatar = downloadURL;
      setUser(newUser);
    });
  };

  return { handlePickImage, handleUploadImage };
};

export default useImageHandler;
