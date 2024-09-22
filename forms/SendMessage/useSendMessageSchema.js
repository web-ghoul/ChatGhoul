import { useContext } from "react";
import * as Yup from "yup";
import { AppContext } from "../../contexts/AppContext";

const useSendMessageSchema = () => {
  const { editableMessage } = useContext(AppContext);

  const SendMessageInitialValues = {
    message: editableMessage?.message || "",
  };

  const SendMessageSchema = Yup.object().shape({
    message: Yup.string().required("Message is required"),
  });

  const SendMediaSchema = Yup.object().shape({
    message: Yup.string(),
  });

  return { SendMessageInitialValues, SendMessageSchema, SendMediaSchema };
};

export default useSendMessageSchema;
