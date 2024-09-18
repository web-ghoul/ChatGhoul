import * as Yup from "yup";

const useLoginSchema = () => {
  const LoginInitialValues = {
    email: "",
    password: "",
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  return { LoginInitialValues, LoginSchema };
};

export default useLoginSchema;
