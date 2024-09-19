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
  const { handleSendMessage } = useSendMessageSubmit();
  const { SendMessageInitialValues, SendMessageSchema } =
    useSendMessageSchema();

  const formik = useFormik({
    initialValues:
      type === "login"
        ? LoginInitialValues
        : type === "register"
        ? RegisterInitialValues
        : type == "editUser"
        ? EditUserInitialValues
        : type === "sendMessage" && SendMessageInitialValues,
    validationSchema:
      type === "login"
        ? LoginSchema
        : type === "register"
        ? RegisterSchema
        : type == "editUser"
        ? EditUserSchema
        : type === "sendMessage" && SendMessageSchema,
    onSubmit: (values, { resetForm }) => {
      if (type === "login") {
        handleLogin(values);
      } else if (type === "register") {
        handleRegister(values);
      } else if (type === "editUser") {
        handleEditUser(values);
      } else if (type === "sendMessage") {
        handleSendMessage(values, resetForm);
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
    type === "sendMessage" && <SendMessageForm formik={formik} />
  );
};

export default Forms;
