import { useFormik } from "formik";
import React from "react";
import EditUserForm from "./EditUser/EditUserForm";
import useEditUserSchema from "./EditUser/useEditUserSchema";
import useEditUserSubmit from "./EditUser/useEditUserSubmit";
import LoginForm from "./Login/LoginForm";
import useLoginSchema from "./Login/useLoginSchema";
import useLoginSubmit from "./Login/useLoginSubmit";
import RegisterForm from "./Register/RegisterForm";
import useRegisterSchema from "./Register/useRegisterSchema";
import useRegisterSubmit from "./Register/useRegisterSubmit";
import SendMessageForm from "./SendMessage/SendMessageForm";
import useSendMessageSchema from "./SendMessage/useSendMessageSchema";
import useSendMessageSubmit from "./SendMessage/useSendMessageSubmit";

const Forms = ({ type }) => {
  const { handleLogin } = useLoginSubmit();
  const { LoginInitialValues, LoginSchema } = useLoginSchema();
  const { handleRegister } = useRegisterSubmit();
  const { RegisterInitialValues, RegisterSchema } = useRegisterSchema();
  const { handleEditUser } = useEditUserSubmit();
  const { EditUserInitialValues, EditUserSchema } = useEditUserSchema();
  const { handleSendMessage, handleEditMessage, handleSendMedia } =
    useSendMessageSubmit();
  const { SendMessageInitialValues, SendMessageSchema, SendMediaSchema } =
    useSendMessageSchema();

  const formik = useFormik({
    initialValues:
      type === "login"
        ? LoginInitialValues
        : type === "register"
        ? RegisterInitialValues
        : type == "editUser"
        ? EditUserInitialValues
        : (type === "sendMessage" ||
            type === "sendMedia" ||
            type === "editMessage") &&
          SendMessageInitialValues,
    validationSchema:
      type === "login"
        ? LoginSchema
        : type === "register"
        ? RegisterSchema
        : type == "editUser"
        ? EditUserSchema
        : type === "sendMessage" || type === "editMessage"
        ? SendMessageSchema
        : type === "sendMedia" && SendMediaSchema,
    onSubmit: (values, { resetForm }) => {
      if (type === "login") {
        handleLogin(values);
      } else if (type === "register") {
        handleRegister(values);
      } else if (type === "editUser") {
        handleEditUser(values);
      } else if (type === "sendMessage") {
        handleSendMessage(values, resetForm);
      } else if (type === "sendMedia") {
        handleSendMedia(values, resetForm);
      } else if (type === "editMessage") {
        handleEditMessage(values, resetForm);
      }
    },
  });

  return type === "login" ? (
    <LoginForm formik={formik} />
  ) : type === "register" ? (
    <RegisterForm formik={formik} />
  ) : type === "editUser" ? (
    <EditUserForm formik={formik} />
  ) : (
    (type === "sendMessage" ||
      type === "sendMedia" ||
      type === "editMessage") && <SendMessageForm type={type} formik={formik} />
  );
};

export default Forms;
