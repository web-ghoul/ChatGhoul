import React, { useContext } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ViewMedia from '../components/ViewMedia/ViewMedia';
import { ModalsContext } from '../contexts/ModalsContext';

const ViewMediaModal = () => {
  const { openViewMediaModal, handleCloseViewMediaModal } =
    useContext(ModalsContext);

  return (
    <Modal transparent={true} visible={openViewMediaModal} animationType="fade">
      <TouchableWithoutFeedback onPress={handleCloseViewMediaModal}>
        <View
          className={`flex-1 `}
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        />
      </TouchableWithoutFeedback>
      <KeyboardAvoidingView
        className={`absolute bg-black rounded-lg w-full bottom-0 left-0 flex-col justify-center items-between content-stretch`}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ gap: hp(3), height: heightPercentageToDP(100) }}
      >
        <ViewMedia />
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ViewMediaModal;
