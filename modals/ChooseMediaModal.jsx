import React, { useContext } from 'react';
import { KeyboardAvoidingView, Modal, Platform, View } from 'react-native';
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ChooseMedia from '../components/ChooseMedia/ChooseMedia';
import { ModalsContext } from '../contexts/ModalsContext';
import Forms from '../forms/Forms';

const ChooseMediaModal = () => {
  const { openChooseMediaModal } = useContext(ModalsContext);

  return (
    <Modal
      transparent={true}
      visible={openChooseMediaModal}
      animationType="fade"
    >
      <KeyboardAvoidingView
        className={`absolute bg-black rounded-lg w-full bottom-0 left-0 flex-col justify-center items-between content-stretch`}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ gap: hp(3), height: heightPercentageToDP(100) }}
      >
        <ChooseMedia />
        <View className={`absolute bottom-0 left-0 w-full`}>
          <Forms type={'sendMedia'} />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ChooseMediaModal;
