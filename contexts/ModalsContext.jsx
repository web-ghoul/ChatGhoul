import { createContext, useContext, useRef, useState } from "react";
import { Animated } from "react-native";
import { AppContext } from "./AppContext";

export const ModalsContext = createContext();

const ModalsProvider = ({ children }) => {
  const { setEditUserFormType } = useContext(AppContext);

  const [openUserModal, setOpenUserModal] = useState(false);

  const handleOpenUserModal = (type) => {
    setEditUserFormType(type);
    setOpenUserModal(true);
  };

  const handleCloseUserModal = () => {
    setOpenUserModal(false);
  };

  const [openAvatarModal, setOpenAvatarModal] = useState(false);

  const handleOpenAvatarModal = () => {
    setOpenAvatarModal(true);
  };

  const handleCloseAvatarModal = () => {
    setOpenAvatarModal(false);
  };

  const [openFilesModal, setOpenFilesModal] = useState(false);

  const handleOpenFilesModal = () => {
    setOpenFilesModal(true);
  };

  const handleCloseFilesModal = () => {
    setOpenFilesModal(false);
  };

  const [openCameraModal, setOpenCameraModal] = useState(false);

  const handleOpenCameraModal = () => {
    setOpenCameraModal(true);
  };

  const handleCloseCameraModal = () => {
    setOpenCameraModal(false);
  };

  return (
    <ModalsContext.Provider
      value={{
        openUserModal,
        handleOpenUserModal,
        handleCloseUserModal,
        openAvatarModal,
        handleOpenAvatarModal,
        handleCloseAvatarModal,
        openFilesModal,
        handleOpenFilesModal,
        handleCloseFilesModal,
        openCameraModal,
        handleOpenCameraModal,
        handleCloseCameraModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export default ModalsProvider;
