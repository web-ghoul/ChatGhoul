import * as Yup from "yup";

const useSendMessageSchema = () => {
  const SendMessageInitialValues = {
    message: "",
  };

  const SendMessageSchema = Yup.object().shape({
    message: Yup.string().required("Message is required"),
  });

  return { SendMessageInitialValues, SendMessageSchema };
};

export default useSendMessageSchema;
