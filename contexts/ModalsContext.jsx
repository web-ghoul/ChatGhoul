import { createContext, useContext, useState } from 'react';
import { AppContext } from './AppContext';

export const ModalsContext = createContext();

const ModalsProvider = ({ children }) => {
  const { setEditUserFormType } = useContext(AppContext);

  const [openUserModal, setOpenUserModal] = useState(false);

  const handleOpenUserModal = type => {
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

  const [openUploadAvatarModal, setOpenUploadAvatarModal] = useState(false);

  const handleOpenUploadAvatarModal = () => {
    setOpenUploadAvatarModal(true);
  };

  const handleCloseUploadAvatarModal = () => {
    setOpenUploadAvatarModal(false);
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

  const [openShowImageModal, setOpenShowImageModal] = useState(false);

  const handleOpenShowImageModal = () => {
    setOpenShowImageModal(true);
  };

  const handleCloseShowImageModal = () => {
    setOpenShowImageModal(false);
  };

  const [openBackDropModal, setOpenBackDropModal] = useState(false);

  const handleOpenBackDropModal = () => {
    setOpenBackDropModal(true);
  };

  const handleCloseBackDropModal = () => {
    setOpenBackDropModal(false);
  };

  const [openMessageModal, setOpenMessageModal] = useState(false);

  const handleOpenMessageModal = () => {
    setOpenMessageModal(true);
  };

  const handleCloseMessageModal = () => {
    setOpenMessageModal(false);
  };

  const [openChooseMediaModal, setOpenChooseMediaModal] = useState(false);

  const handleOpenChooseMediaModal = () => {
    setOpenChooseMediaModal(true);
  };

  const handleCloseChooseMediaModal = () => {
    setOpenChooseMediaModal(false);
  };

  const [openViewMediaModal, setOpenViewMediaModal] = useState(false);

  const handleOpenViewMediaModal = () => {
    setOpenViewMediaModal(true);
  };

  const handleCloseViewMediaModal = () => {
    setOpenViewMediaModal(false);
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
        openUploadAvatarModal,
        handleOpenUploadAvatarModal,
        handleCloseUploadAvatarModal,
        openFilesModal,
        handleOpenFilesModal,
        handleCloseFilesModal,
        openCameraModal,
        handleOpenCameraModal,
        handleCloseCameraModal,
        openShowImageModal,
        handleOpenShowImageModal,
        handleCloseShowImageModal,
        openBackDropModal,
        handleCloseBackDropModal,
        handleOpenBackDropModal,
        openMessageModal,
        handleOpenMessageModal,
        handleCloseMessageModal,
        openChooseMediaModal,
        handleOpenChooseMediaModal,
        handleCloseChooseMediaModal,
        openViewMediaModal,
        handleOpenViewMediaModal,
        handleCloseViewMediaModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export default ModalsProvider;
