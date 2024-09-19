import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { ModalsContext } from "../contexts/ModalsContext";

const usePickPhoto = () => {
  const { setPhotoPath } = useContext(AppContext);
  const { handleOpenUploadAvatarModal } = useContext(ModalsContext);

  const handleTakePic = async (cameraRef) => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        setPhotoPath(data);
        handleOpenUploadAvatarModal();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return { handleTakePic };
};

export default usePickPhoto;
