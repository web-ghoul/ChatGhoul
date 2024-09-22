import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useContext } from 'react';
import { View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { AppContext } from '../../contexts/AppContext';
import { ModalsContext } from '../../contexts/ModalsContext';
import useMediaHandler from '../../hooks/useMediaHandler';
import ChooseFileHelperButton from './ChooseFileHelperButton';

const ChangeFile = () => {
  const { handleChooseMedia } = useMediaHandler();
  const {
    handleOpenCameraModal,
    handleCloseFilesModal,
    handleOpenChooseMediaModal,
  } = useContext(ModalsContext);
  const { setMedia } = useContext(AppContext);

  const handleChooseImage = async () => {
    const path = await handleChooseMedia('image');
    if (path) {
      setMedia(path);
      handleCloseFilesModal();
      handleOpenChooseMediaModal();
    }
  };

  const handleChooseFile = async () => {
    const path = await handleChooseMedia('file');
    if (path) {
      setMedia(path);
      handleCloseFilesModal();
      handleOpenChooseMediaModal();
    }
  };

  return (
    <View
      className={`flex-1 flex-row justify-center items-center`}
      style={{
        gap: wp(20),
        paddingHorizontal: wp(4),
        paddingVertical: hp(4),
      }}
    >
      {/* <ChooseFileHelperButton
        title={'Document'}
        press={handleChooseFile}
        icon={
          <Ionicons name="document-text-outline" size={24} color="#12b0be" />
        }
      /> */}
      <ChooseFileHelperButton
        title={'Camera'}
        press={handleOpenCameraModal}
        icon={<Feather name="camera" size={24} color="#12b0be" />}
      />
      <ChooseFileHelperButton
        title={'Gallery'}
        press={handleChooseImage}
        icon={<FontAwesome name="photo" size={24} color="#12b0be" />}
      />
    </View>
  );
};

export default ChangeFile;
