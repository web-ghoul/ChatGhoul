import * as ImagePicker from "expo-image-picker";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ModalsContext } from "../contexts/ModalsContext";
import { db, storage } from "../firebase";
import { handleAlert } from "../functions/handleAlert";

const useImageHandler = () => {
  const { user, setUser, handleAuth, setLoading } = useContext(AuthContext);
  const {
    handleCloseAvatarModal,
    handleCloseShowImageModal,
    handleCloseUploadAvatarModal,
    handleCloseCameraModal,
  } = useContext(ModalsContext);

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

  const handleUploadAvatar = async (imagePath) => {
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
      handleAlert("Uploaded", "Avatar is Changed Successfully", "success");
      handleCloseShowImageModal();
      handleCloseCameraModal();
      handleCloseUploadAvatarModal();
    });
  };

  const handleChooseAndUploadImage = async () => {
    try {
      setLoading(true);
      const imagePath = await handlePickImage();
      handleUploadAvatar(imagePath);
      handleAuth();
      setLoading(false);
      handleCloseAvatarModal();
      handleCloseShowImageModal();
      handleCloseUploadAvatarModal();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setLoading(false);
  };

  return { handlePickImage, handleUploadAvatar, handleChooseAndUploadImage };
};

export default useImageHandler;
