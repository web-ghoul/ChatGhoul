import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Animated,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ModalsContext } from "../../contexts/ModalsContext";
import Input from "../../components/Input/Input";
import ChooseGender from "../../components/ChooseGender/ChooseGender";
import { Feather } from "@expo/vector-icons";
import { AppContext } from "../../contexts/AppContext";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { AuthContext } from "../../contexts/AuthContext";
import UserModal from "../../modals/UserModal";

const EditUserForm = ({ formik }) => {
  const { handleSubmit } = formik;
  const { loading } = useContext(AuthContext);
  const { openUserModal, modalSlideAnimate } = useContext(ModalsContext);
  const { editUserFormType } = useContext(AppContext);

  useEffect(() => {
    if (openUserModal) {
      Animated.spring(modalSlideAnimate, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [openUserModal]);

  return (
    <UserModal>
      <Text
        className={`text-white font-[700]`}
        style={{
          fontSize: wp(5),
        }}
      >
        Edit Your{" "}
        {editUserFormType[0]?.toUpperCase() + editUserFormType?.slice(1)}
      </Text>
      {editUserFormType === "email" && (
        <Input
          name={"email"}
          placeholder={"Enter Email"}
          formik={formik}
          icon={<Feather name="mail" size={24} color="black" />}
        />
      )}
      {editUserFormType === "username" && (
        <Input
          name={"username"}
          placeholder={"Enter Username"}
          formik={formik}
          icon={<Feather name="user" size={24} color="black" />}
        />
      )}
      {editUserFormType === "phone" && (
        <Input
          name={"phone"}
          placeholder={"Enter Phone Number"}
          formik={formik}
          type={"tel"}
          icon={<Feather name="smartphone" size={24} color="black" />}
        />
      )}
      {editUserFormType === "gender" && <ChooseGender formik={formik} />}
      <SubmitButton
        handleSubmit={handleSubmit}
        loading={loading}
        title={"Edit"}
      />
    </UserModal>
  );
};

export default EditUserForm;
